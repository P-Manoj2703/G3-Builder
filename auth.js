// ═══════════════════════════════════════════════════════════════
// G3 BUILDERS — AUTH LIBRARY (auth.js)
// Include on every page: <script src="auth.js"></script>
// Must be loaded AFTER config.js
// ═══════════════════════════════════════════════════════════════

const G3Auth = (() => {

  const SESSION_KEY = 'g3_session';
  const SESSION_DAYS = 7;

  // ── Get current session ──────────────────────────────────────
  function getSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      // Check expiry
      if (!session.expiry || Date.now() > session.expiry) {
        localStorage.removeItem(SESSION_KEY);
        return null;
      }
      return session;
    } catch(e) {
      return null;
    }
  }

  // ── Save session ─────────────────────────────────────────────
  function saveSession(user) {
    const session = {
      username:  user.username,
      name:      user.name,
      role:      user.role,      // supervisor | partner | owner
      personId:  user.personId,  // maps to G3_CONFIG.people id
      expiry:    Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }

  // ── Clear session (logout) ───────────────────────────────────
  function logout() {
    localStorage.removeItem(SESSION_KEY);
    location.replace('login.html');
  }

  // ── Login: check credentials against Google Sheet ────────────
  async function login(username, password) {
    const URL = G3_CONFIG.app.sheetURL;

    // Fetch users from sheet
    const res = await fetch(
      URL + '?action=getUsers&username=' + encodeURIComponent(username),
      { mode: 'cors' }
    );
    const data = await res.json();

    if (!data.ok || !data.data || data.data.length === 0) {
      return { ok: false, error: 'Invalid username or password.' };
    }

    const user = data.data[0];

    // Check active
    if (user.active && user.active.toString().toLowerCase() !== 'yes') {
      return { ok: false, error: 'Your account is inactive. Contact the administrator.' };
    }

    // Check password (plain text — good enough for internal app)
    if (user.password !== password) {
      return { ok: false, error: 'Invalid username or password.' };
    }

    // Save session
    saveSession({
      username:  user.username,
      name:      user.name,
      role:      user.role,
      personId:  user.personId
    });

    return { ok: true, user };
  }

  // ── Protect a page — call at top of every page ───────────────
  // Redirects to login if not authenticated
  function requireAuth() {
    const session = getSession();
    if (!session) {
      const current = encodeURIComponent(location.pathname.split('/').pop() + location.search);
      location.replace('login.html?redirect=' + current);
      return null;
    }
    return session;
  }

  // ── Inject logout button into nav ───────────────────────────
  function injectNavUser() {
    const session = getSession();
    if (!session) return;

    // Wait for DOM
    const inject = () => {
      const navRight = document.querySelector('.nav-right');
      if (!navRight) return;

      const userEl = document.createElement('div');
      userEl.style.cssText = 'display:flex;align-items:center;gap:10px;';
      userEl.innerHTML = `
        <div style="font-size:12px;color:var(--ink2);text-align:right;line-height:1.3">
          <div style="font-weight:600;color:var(--ink)">${session.name}</div>
          <div style="font-size:11px;text-transform:capitalize">${session.role}</div>
        </div>
        <button onclick="G3Auth.logout()" style="
          background:none;border:1.5px solid var(--border);border-radius:8px;
          padding:5px 10px;font-size:12px;color:var(--ink2);cursor:pointer;
          white-space:nowrap;
        ">Sign out</button>
      `;
      navRight.prepend(userEl);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', inject);
    } else {
      inject();
    }
  }

  return { getSession, login, logout, requireAuth, injectNavUser };

})();
