console.log('+---------+');
console.log('| utility |');
console.log('+---------+');

console.log('/* URI.js */');
import URI from 'urijs';
console.log(new URI('http://hogehoge.com/').protocol());

console.log();

console.log('/* qs */');
import qs from 'qs';
const encoded = qs.stringify({a: 1, b: 'one'});
console.log(encoded);
const decoded = qs.parse(encoded);
console.log(decoded);

console.log();

console.log('/* numeral */');
import numeral from 'numeral';
console.log(numeral(1).format('0o'));

console.log();

console.log('/* clone */');
import clone from 'clone';
const x = new Date();
const y = clone(x);
x.setTime(946652400000);
console.log(x);
console.log(y);

console.log();
