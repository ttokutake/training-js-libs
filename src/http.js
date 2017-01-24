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

console.log('### Promise & SuperAgent ###');
import Promise from 'bluebird';
import req     from 'superagent-bluebird-promise';
const urls = ['https://www.example.com/', 'https://www.example.com/'];
const results = Promise
  .map(urls, url => {
    console.log('superagent:', url);
    return req.get(url).then(res => console.log('superagent:', res.status));
  })
  .then(() => {console.log('superagent:', 'done')});
console.log('superagent:', results);
