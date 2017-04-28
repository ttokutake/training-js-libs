console.log('+-----+');
console.log('| es6 |');
console.log('+-----+');

console.log('/* import & export */');
import {ONE, TWO} from './es6_export';
console.log(ONE, TWO);

console.log();

console.log('/* Rest parameters */');
function func1(...args) {
  args.forEach(arg => {
    console.log(arg);
  });
}
func1([1, 2, 3]);

console.log();
