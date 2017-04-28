console.log('### humps ###');
import humps from 'humps';
console.log(humps.camelize('one_two_three'));
console.log(humps.decamelize('OneTwoThree'));

console.log('### string ###');
import S from 'string';
console.log(S('<p>hello, world!</p>').between('<p>', '</p>').s);
