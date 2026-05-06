exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { query } = JSON.parse(event.body);

    const SHEET_ID = '1OBliAy-otDBDF8Xnwa1nR2R1X6pnIoTSj9x9qL_L688';
    const API_KEY = process.env.GSHEETS_API_KEY;
    const RANGE = 'Sheet1!A2:G1000';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    
    console.log('Fetching URL:', url.replace(API_KEY, 'REDACTED'));
    
    const res = await fetch(url);
    const data = await res.json();
    
    console.log('Sheets API status:', res.status);
    console.log('Sheets API response:', JSON.stringify(data).substring(0, 500));

    if (data.error) {
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ results: [], error: data.error.message })
      };
    }

    if (!data.values) {
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ results: [], debug: 'no values returned' })
      };
    }

    const q = query.toLowerCase().trim();
    const matches = [];

    for (const row of data.values) {
      const preferredName = (row[0] || '').toLowerCase();
      const altName = (row[1] || '').toLowerCase();
      const branch = row[2] || '';
      const region = row[3] || '';
      const email = row[4] || '';
      const assignedAE = row[5] || '';
      const aeEmail = row[6] || '';

      if (preferredName.includes(q) || altName.includes(q)) {
        matches.push({ name: row[0], altName: row[1] || null, branch, region, email, assignedAE, aeEmail });
      }
      if (matches.length >= 8) break;
    }

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ results: matches, total_rows: data.values.length })
    };

  } catch(err) {
    console.log('Lookup error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message, results: [] })
    };
  }
};
