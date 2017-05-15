console.log('+------+');
console.log('| math |');
console.log('+------+');

console.log('/* math.js */');
import math from 'mathjs';
console.log(math.randomInt(0, 10));

console.log('/* jStat */');
import {jStat} from 'jStat';
console.log([0, 0, 0].map(() => jStat.normal.sample(50, 1.0)));

console.log('/* prob.js */');
import Prob from 'prob.js';
const r = Prob.normal(50, 1.0);
console.log([0, 0, 0].map(() => r()));

console.log();
