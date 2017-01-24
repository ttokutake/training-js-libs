console.log('### import and export ###');
import {ONE, TWO} from './constant';
console.log(ONE, TWO);

console.log('### Rest Parameters ###');
function func1(...args) {
  args.forEach(arg => {
    console.log(arg);
  });
}
func1([1, 2, 3]);

console.log('### Object rest spread ###');
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {c: 4, d: 5};
console.log({...obj1, ...obj2});
