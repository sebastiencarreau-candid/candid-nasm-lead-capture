exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { imageBase64, fileName } = JSON.parse(event.body);
    if (!imageBase64 || !fileName) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Missing imageBase64 or fileName' })
      };
    }

    const CLIENT_EMAIL = process.env.GDRIVE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.GDRIVE_PRIVATE_KEY.replace(/\\n/g, '\n');
    const FOLDER_ID = process.env.GDRIVE_FOLDER_ID;

    // Get OAuth token
    const token = await getAccessToken(CLIENT_EMAIL, PRIVATE_KEY);

    // Upload file to Drive
    const imageBuffer = Buffer.from(imageBase64, 'base64');
    const boundary = 'nasm_boundary';

    const metadata = JSON.stringify({ name: fileName, parents: [FOLDER_ID] });

    const body = [
      `--${boundary}`,
      'Content-Type: application/json; charset=UTF-8',
      '',
      metadata,
      `--${boundary}`,
      'Content-Type: image/jpeg',
      'Content-Transfer-Encoding: base64',
      '',
      imageBase64,
      `--${boundary}--`
    ].join('\r\n');

    const uploadRes = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink&supportsAllDrives=true', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body
    });

    const uploadData = await uploadRes.json();

    if (uploadData.error) {
      throw new Error(uploadData.error.message);
    }

    // Make file viewable by anyone with the link
    await fetch(`https://www.googleapis.com/drive/v3/files/${uploadData.id}/permissions?supportsAllDrives=true`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: 'reader', type: 'anyone' })
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ url: uploadData.webViewLink, fileId: uploadData.id })
    };

  } catch(err) {
    console.log('GDrive error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};

async function getAccessToken(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/drive.file',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const jwt = await createJWT(payload, privateKey);

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`
  });

  const data = await res.json();
  if (!data.access_token) throw new Error('Failed to get access token: ' + JSON.stringify(data));
  return data.access_token;
}

async function createJWT(payload, privateKey) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const encodeBase64Url = str => Buffer.from(str).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const headerB64 = encodeBase64Url(JSON.stringify(header));
  const payloadB64 = encodeBase64Url(JSON.stringify(payload));
  const signingInput = `${headerB64}.${payloadB64}`;

  const crypto = require('crypto');
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signingInput);
  const signature = sign.sign(privateKey, 'base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${signingInput}.${signature}`;
}
