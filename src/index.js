console.log('### import and export ###');
import {ONE, TWO} from './constant';
console.log(ONE, TWO);

console.log('### Object rest spread ###');
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {c: 4, d: 5};
console.log({...obj1, ...obj2});


console.log('### Lodash ###');
import _ from 'lodash';
const indices = _.range(10);
_.each(indices, (v, _k) => {
  console.log(v);
});

console.log('### icepick ###');
import i from 'icepick';
const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
}
console.log(obj);
const new_obj = i.updateIn(obj, ['b', 'd', 1], v => v * v);
console.log(obj);
console.log(new_obj);

console.log('### Ramda ###');
import R from 'Ramda';
const flatMapped = R.chain(n => [n, n])(R.range(1, 10));
console.log(flatMapped);


console.log('### qs ###');
import qs from 'qs';
const encoded = qs.stringify({a: 1, b: 'one'});
console.log(encoded);
const decoded = qs.parse(encoded);
console.log(decoded);

console.log('### humps ###');
import humps from 'humps';
console.log(humps.camelize('one_two_three'));
console.log(humps.decamelize('OneTwoThree'));

console.log('### string ###');
import S from 'string';
console.log(S('<p>hello, world!</p>').between('<p>', '</p>').s);


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
