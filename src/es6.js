console.log('### import and export ###');
import {ONE, TWO} from './es6_export';
console.log(ONE, TWO);

console.log('### Rest Parameters ###');
function func1(...args) {
  args.forEach(arg => {
    console.log(arg);
  });
}
func1([1, 2, 3]);
