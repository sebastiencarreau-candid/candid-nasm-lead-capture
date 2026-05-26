const NICKNAME_MAP = {
  // A
  'al': 'albert', 'albert': 'al',
  'alex': 'alexander', 'alexander': 'alex',
  'allie': 'allison', 'allison': 'allie',
  'abby': 'abigail', 'abigail': 'abby',
  'angie': 'angela', 'angela': 'angie',
  'annie': 'ann', 'ann': 'annie',
  'anne': 'annie', 'annie': 'anne',
  'andy': 'andrew', 'andrew': 'andy',
  'drew': 'andrew', 'andrew': 'drew',

  // B
  'barb': 'barbara', 'barbara': 'barb',
  'bart': 'bartholomew', 'bartholomew': 'bart',
  'becca': 'rebecca', 'rebecca': 'becca',
  'becky': 'rebecca', 'rebecca': 'becky',
  'ben': 'benjamin', 'benjamin': 'ben',
  'bernie': 'bernard', 'bernard': 'bernie',
  'bert': 'robert', 'robert': 'bert',
  'bill': 'william', 'william': 'bill',
  'billy': 'william', 'william': 'billy',
  'bob': 'robert', 'robert': 'bob',
  'brad': 'bradley', 'bradley': 'brad',
  'bud': 'william', 'william': 'bud',

  // C
  'cal': 'calvin', 'calvin': 'cal',
  'carl': 'charles', 'charles': 'carl',
  'carrie': 'caroline', 'caroline': 'carrie',
  'carol': 'caroline', 'caroline': 'carol',
  'cathy': 'catherine', 'catherine': 'cathy',
  'kate': 'katherine', 'katherine': 'kate',
  'kathy': 'katherine', 'katherine': 'kathy',
  'katie': 'katherine', 'katherine': 'katie',
  'charlie': 'charles', 'charles': 'charlie',
  'chuck': 'charles', 'charles': 'chuck',
  'chris': 'christopher', 'christopher': 'chris',
  'cindy': 'cynthia', 'cynthia': 'cindy',
  'connie': 'constance', 'constance': 'connie',
  'curt': 'curtis', 'curtis': 'curt',

  // D
  'dan': 'daniel', 'daniel': 'dan',
  'danny': 'daniel', 'daniel': 'danny',
  'dave': 'david', 'david': 'dave',
  'deb': 'deborah', 'deborah': 'deb',
  'debbie': 'deborah', 'deborah': 'debbie',
  'denny': 'dennis', 'dennis': 'denny',
  'di': 'diana', 'diana': 'di',
  'dick': 'richard', 'richard': 'dick',
  'don': 'donald', 'donald': 'don',
  'donnie': 'donald', 'donald': 'donnie',
  'doug': 'douglas', 'douglas': 'doug',

  // E
  'ed': 'edward', 'edward': 'ed',
  'eddie': 'edward', 'edward': 'eddie',
  'ned': 'edward', 'edward': 'ned',
  'ellie': 'eleanor', 'eleanor': 'ellie',
  'ellen': 'eleanor', 'eleanor': 'ellen',
  'em': 'emily', 'emily': 'em',
  'emmy': 'emily', 'emily': 'emmy',

  // F
  'frank': 'francis', 'francis': 'frank',
  'frankie': 'frances', 'frances': 'frankie',
  'fred': 'frederick', 'frederick': 'fred',

  // G
  'gail': 'abigail', 'abigail': 'gail',
  'gene': 'eugene', 'eugene': 'gene',
  'ginny': 'virginia', 'virginia': 'ginny',
  'greg': 'gregory', 'gregory': 'greg',
  'gus': 'augustus', 'augustus': 'gus',

  // H
  'hal': 'harold', 'harold': 'hal',
  'hank': 'henry', 'henry': 'hank',

  // J
  'jack': 'john', 'john': 'jack',
  'jake': 'jacob', 'jacob': 'jake',
  'jay': 'james', 'james': 'jay',
  'jeff': 'jeffrey', 'jeffrey': 'jeff',
  'jen': 'jennifer', 'jennifer': 'jen',
  'jenny': 'jennifer', 'jennifer': 'jenny',
  'jerry': 'gerald', 'gerald': 'jerry',
  'jess': 'jessica', 'jessica': 'jess',
  'jessie': 'jessica', 'jessica': 'jessie',
  'jim': 'james', 'james': 'jim',
  'jimmy': 'james', 'james': 'jimmy',
  'jo': 'josephine', 'josephine': 'jo',
  'joe': 'joseph', 'joseph': 'joe',
  'johnny': 'john', 'john': 'johnny',
  'jon': 'jonathan', 'jonathan': 'jon',
  'josie': 'josephine', 'josephine': 'josie',
  'josh': 'joshua', 'joshua': 'josh',
  'jules': 'julia', 'julia': 'jules',
  'julie': 'julia', 'julia': 'julie',

  // K
  'ken': 'kenneth', 'kenneth': 'ken',
  'kim': 'kimberly', 'kimberly': 'kim',

  // L
  'larry': 'lawrence', 'lawrence': 'larry',
  'laurie': 'laura', 'laura': 'laurie',
  'lee': 'leonard', 'leonard': 'lee',
  'len': 'leonard', 'leonard': 'len',
  'les': 'leslie', 'leslie': 'les',
  'lexi': 'alexandra', 'alexandra': 'lexi',
  'lew': 'lewis', 'lewis': 'lew',
  'liz': 'elizabeth', 'elizabeth': 'liz',
  'beth': 'elizabeth', 'elizabeth': 'beth',
  'lisa': 'elizabeth', 'elizabeth': 'lisa',
  'lucy': 'lucille', 'lucille': 'lucy',

  // M
  'maddie': 'madison', 'madison': 'maddie',
  'mandy': 'amanda', 'amanda': 'mandy',
  'marcy': 'marcia', 'marcia': 'marcy',
  'margie': 'margaret', 'margaret': 'margie',
  'maggie': 'margaret', 'margaret': 'maggie',
  'meg': 'margaret', 'margaret': 'meg',
  'peggy': 'margaret', 'margaret': 'peggy',
  'matt': 'matthew', 'matthew': 'matt',
  'mel': 'melissa', 'melissa': 'mel',
  'mike': 'michael', 'michael': 'mike',
  'millie': 'mildred', 'mildred': 'millie',
  'mindy': 'melinda', 'melinda': 'mindy',
  'missy': 'melissa', 'melissa': 'missy',
  'mitch': 'mitchell', 'mitchell': 'mitch',
  'molly': 'mary', 'mary': 'molly',

  // N
  'nick': 'nicholas', 'nicholas': 'nick',
  'nora': 'eleanor', 'eleanor': 'nora',

  // P
  'pat': 'patrick', 'patrick': 'pat',
  'patty': 'patricia', 'patricia': 'patty',
  'trish': 'patricia', 'patricia': 'trish',
  'pam': 'pamela', 'pamela': 'pam',
  'penny': 'penelope', 'penelope': 'penny',
  'pete': 'peter', 'peter': 'pete',
  'phil': 'philip', 'philip': 'phil',
  'polly': 'mary', 'mary': 'polly',

  // R
  'rach': 'rachel', 'rachel': 'rach',
  'rae': 'rachel', 'rachel': 'rae',
  'randy': 'randall', 'randall': 'randy',
  'ray': 'raymond', 'raymond': 'ray',
  'rich': 'richard', 'richard': 'rich',
  'rick': 'richard', 'richard': 'rick',
  'rob': 'robert', 'robert': 'rob',
  'ronnie': 'veronica', 'veronica': 'ronnie',
  'rose': 'rosemary', 'rosemary': 'rose',
  'rosie': 'rosemary', 'rosemary': 'rosie',
  'russ': 'russell', 'russell': 'russ',

  // S
  'sal': 'salvador', 'salvador': 'sal',
  'sam': 'samuel', 'samuel': 'sam',
  'sandy': 'sandra', 'sandra': 'sandy',
  'sandi': 'sandra', 'sandra': 'sandi',
  'sara': 'sarah', 'sarah': 'sara',
  'shelly': 'michelle', 'michelle': 'shelly',
  'shell': 'michelle', 'michelle': 'shell',
  'sid': 'sidney', 'sidney': 'sid',
  'stan': 'stanley', 'stanley': 'stan',
  'steph': 'stephanie', 'stephanie': 'steph',
  'steve': 'stephen', 'stephen': 'steve',
  'stu': 'stuart', 'stuart': 'stu',
  'sue': 'susan', 'susan': 'sue',
  'susie': 'susan', 'susan': 'susie',

  // T
  'ted': 'theodore', 'theodore': 'ted',
  'terri': 'theresa', 'theresa': 'terri',
  'terry': 'theresa', 'theresa': 'terry',
  'tim': 'timothy', 'timothy': 'tim',
  'tina': 'christina', 'christina': 'tina',
  'tom': 'thomas', 'thomas': 'tom',
  'tony': 'anthony', 'anthony': 'tony',

  // V
  'val': 'valerie', 'valerie': 'val',
  'vicki': 'victoria', 'victoria': 'vicki',
  'vicky': 'victoria', 'victoria': 'vicky',
  'vince': 'vincent', 'vincent': 'vince',

  // W
  'walt': 'walter', 'walter': 'walt',
  'will': 'william', 'william': 'will',

  // Z
  'zach': 'zachary', 'zachary': 'zach',
  'zack': 'zachary', 'zachary': 'zack',
};

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { query } = JSON.parse(event.body);
    if (!query || query.length < 2) {
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ results: [] })
      };
    }

    const SHEET_ID = '1OBliAy-otDBDF8Xnwa1nR2R1X6pnIoTSj9x9qL_L688';
    const API_KEY = process.env.GSHEETS_API_KEY;
    const RANGE = 'Sheet1!A2:I1000';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

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
        body: JSON.stringify({ results: [] })
      };
    }

    const q = query.toLowerCase().trim();
    const qParts = q.split(' ');
    const qFirst = qParts[0];
    const qFirstExpanded = NICKNAME_MAP[qFirst] || null;

    const matches = [];

    for (const row of data.values) {
      const preferredName = (row[0] || '').toLowerCase();
      const altName = (row[1] || '').toLowerCase();
      const branch = row[2] || '';
      const region = row[3] || '';
      const email = row[4] || '';
      const assignedAE = row[5] || '';
      const aeEmail = row[6] || '';
      const aePhone = row[7] || '';
      const aeFirstName = row[8] || '';

      // Direct match on preferred or alt name
      let matched = preferredName.includes(q) || altName.includes(q);

      // Nickname expansion — e.g. "jeff" matches "jeffrey johnson"
      if (!matched && qFirstExpanded) {
        const qNickname = [qFirstExpanded, ...qParts.slice(1)].join(' ');
        matched = preferredName.includes(qNickname) || altName.includes(qNickname);
      }

      // Reverse nickname — e.g. "jeffrey" matches "jeff johnson"
      if (!matched) {
        const prefFirst = preferredName.split(' ')[0];
        const prefFirstExpanded = NICKNAME_MAP[prefFirst] || null;
        if (prefFirstExpanded) {
          const prefNickname = [prefFirstExpanded, ...preferredName.split(' ').slice(1)].join(' ');
          matched = prefNickname.includes(q);
        }
      }

      // Alt name nickname check
      if (!matched && altName) {
        const altFirst = altName.split(' ')[0];
        const altFirstExpanded = NICKNAME_MAP[altFirst] || null;
        if (altFirstExpanded) {
          const altNickname = [altFirstExpanded, ...altName.split(' ').slice(1)].join(' ');
          matched = altNickname.includes(q);
        }
      }

      if (matched) {
        matches.push({
          name: row[0],
          altName: row[1] || null,
          branch, region, email,
          assignedAE, aeEmail, aePhone, aeFirstName
        });
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
