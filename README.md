# G3 Builders — Project Tracker

## Files

| File | Purpose |
|---|---|
| `index.html` | Home screen |
| `entry.html` | Log expenses, land, capital — anyone |
| `vendors.html` | Vendor ledger — invoices vs payments |
| `sales.html` | Sales register — buyer payments per flat |
| `dashboard.html` | Full overview — owner/partner |
| `investor.html` | Read-only investor report |
| `config.js` | **All categories, vendors, flats, people — edit here only** |
| `style.css` | Shared styles |
| `appsscript.gs` | Paste into Google Apps Script |

## Setup (one time, 45 minutes)

### 1. Google Sheet
1. Go to sheets.google.com → New spreadsheet → Name it "G3 Tracker"
2. Leave it blank — Apps Script creates all sheets automatically

### 2. Apps Script
1. In the sheet: Extensions → Apps Script
2. Delete existing code, paste entire contents of `appsscript.gs`
3. In the script, update:
   - `PHONE` = your WhatsApp number e.g. `919876543210`
   - `API_KEY` = from CallMeBot (free — see step 4)
4. Click Deploy → New deployment → Web app
   - Execute as: Me
   - Who has access: Anyone
5. Copy the deployment URL

### 3. Update config.js
Find this line and replace with your URL:
```
sheetURL: 'YOUR_APPS_SCRIPT_URL_HERE',
```
Also update your phone number:
```
ownerPhone: '919XXXXXXXXX',
```

### 4. WhatsApp alerts (free)
1. Send WhatsApp message to +34 644 60 49 48: `I allow callmebot to send me messages`
2. You'll receive your API key
3. Enter in appsscript.gs

### 5. Host on GitHub Pages
1. github.com → New repository → `g3-tracker` → Public
2. Upload all files
3. Settings → Pages → Branch: main → Save
4. Your URLs:
   - Entry form: `yourusername.github.io/g3-tracker/entry.html`
   - Dashboard: `yourusername.github.io/g3-tracker/dashboard.html`
   - Investor: `yourusername.github.io/g3-tracker/investor.html`

## Adding new categories (takes 30 seconds)

Open `config.js`, find the `categories` array, add one line:
```javascript
{ id: 'new_cat', name: 'My New Category', emoji: '🔑', type: 'expense', roles: 'all' },
```
Commit to GitHub → done. Category appears in form, dashboard, reports automatically.

## Weekly auto-summary
In Apps Script editor:
1. Click Triggers (clock icon)
2. Add trigger → `weeklySummary` → Time-driven → Week timer → Monday 8am

## Cost
| Item | Cost |
|---|---|
| GitHub Pages | ₹0 |
| Google Sheets + Drive + Apps Script | ₹0 |
| CallMeBot WhatsApp alerts | ₹0 |
| **Total** | **₹0** |
