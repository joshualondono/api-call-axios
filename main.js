const axios = require('axios');
const url =  'https://api.publicapis.org/entries'

function promiseCall() {
  return new Promise(resolve => {
    axios.get(url).then(x => console.log(x.data.entries))
  });
}


async function asyncCall() {

  try {
  console.log('fetching...');
  const result = await promiseCall();
  console.log('done');
  // expected output: "resolved"
} catch (err) {
  console.log(err.message)
}
}

asyncCall().then(x => x)
