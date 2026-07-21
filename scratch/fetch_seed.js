const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({status: res.statusCode, data}));
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://entre-skill-hub.onrender.com/api/recommendations/seed',
    'https://entre-skill-hub.onrender.com/api/mentors/seed',
    'https://entre-skill-hub.onrender.com/api/learning/seed',
    'https://entre-skill-hub.onrender.com/'
  ];
  
  for (const url of urls) {
    try {
      console.log('Fetching', url);
      const res = await fetch(url);
      console.log(res.status, res.data.substring(0, 200));
    } catch (e) {
      console.error(e.message);
    }
  }
}

run();
