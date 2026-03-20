// formhelper.js — shared 2-step submit for all forms
// Step 1: Send form data via GET → saves to sheet instantly
// Step 2: If photo attached, upload to Drive via POST → updates PhotoURL column

async function submitToSheet(params, photoFile, sheetName) {
  var ID = params.get('ref') || params.get('id');

  // Step 1 — Send form data via GET (bypasses 302 redirect issue)
  var submitUrl = CONFIG.sheetURL + '?' + params.toString();
  await fetch(submitUrl, { mode: 'no-cors' });

  // Step 2 — Upload photo separately if attached
  if (photoFile) {
    try {
      var photoData = await new Promise(function(res, rej) {
        var reader = new FileReader();
        reader.onload = function() { res(reader.result.split(',')[1]); };
        reader.onerror = rej;
        reader.readAsDataURL(photoFile);
      });

      var photoParams = new URLSearchParams({
        action:    'addDoc',
        linkedRef: ID,
        linkedTo:  sheetName.toLowerCase().replace('entries','entry').replace('vendors','vendor').replace('sales','sale'),
        fileData:  photoData,
        fileMime:  photoFile.type,
        fileName:  photoFile.name,
        fileType:  'screenshot',
        uploadedBy: params.get('submittedBy') || ''
      });

      await fetch(CONFIG.sheetURL, {
        method: 'POST',
        body:   photoParams,
        mode:   'no-cors'
      });
    } catch(err) {
      console.log('Photo upload failed:', err);
    }
  }

  return { status: 'ok', id: ID };
}
