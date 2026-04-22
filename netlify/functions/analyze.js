exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    console.log('Media type:', body.mediaType);
    console.log('Image data length:', body.imageBase64 ? body.imageBase64.length : 'MISSING');
    console.log('API Key present:', !!process.env.ANTHROPIC_API_KEY);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: body.mediaType || 'image/jpeg', data: body.imageBase64 }
            },
            {
              type: 'text',
              text: 'Extract information from this conference name badge. Return ONLY a JSON object with these exact keys: firstName, lastName, role, branchName, region.\n- firstName: first name on badge\n- lastName: last name on badge\n- role: job title shown\n- branchName: branch/location name (e.g. "TN - Nashville")\n- region: region shown after the pipe character (e.g. "Southeast")\nReturn only the JSON object, no other text.'
            }
          ]
        }]
      })
    });

    console.log('Anthropic response status:', response.status);
    const data = await response.json();
    console.log('Anthropic response body:', JSON.stringify(data));

    if (data.error) throw new Error(data.error.message);

    const text = data.content.map(i => i.text || '').join('');
    const parsed = JSON.parse(text.replace(/```json|```/g, '').trim());

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(parsed)
    };
  } catch(err) {
    console.log('CAUGHT ERROR:', err.message);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
