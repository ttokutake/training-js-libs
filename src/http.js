console.log('### isomorphic-fetch ###');
import 'isomorphic-fetch';
const url = 'https://www.example.com/';
const result = fetch(url)
  .then(res => {
    console.log('fetch:', res.status);
    return res.body;
  })
  .then(body => {
    console.log('fetch:', body.readable);
  });
console.log('fetch:', result);
