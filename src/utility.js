console.log('+---------+');
console.log('| utility |');
console.log('+---------+');

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
