const fetch = require('node-fetch');

const url = 'https://google-api31.p.rapidapi.com/scrap';
const options = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': '8648068f4amsh10c601e2ee74cc5p10bdddjsnc07947865283',
    'x-rapidapi-host': 'google-api31.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  body: {
    url: 'https://docs.rexzbot.xyz/config/'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}