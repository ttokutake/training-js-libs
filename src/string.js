console.log('+--------+');
console.log('| string |');
console.log('+--------+');

console.log('/* string.js */');
import S from 'string';
console.log(S('<p>hello, world!</p>').between('<p>', '</p>').s);

console.log();

console.log('/* escape-string-regexp */');
import escapeRegExp from 'escape-string-regexp';
console.log(escapeRegExp('[* + *]'));

console.log();

console.log('/* humps */');
import humps from 'humps';
console.log(humps.camelize('one_two_three'));
console.log(humps.decamelize('OneTwoThree'));

console.log();
