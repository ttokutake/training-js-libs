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

console.log('### Lazy ###');
import Lazy from 'lazy.js';
console.log(Lazy({a: 1, b: 2}).assign({c: 3}));

console.log('### Ramda ###');
import R from 'Ramda';
const flatMapped = R.chain(n => [n, n])(R.range(1, 10));
console.log(flatMapped);

console.log('### Immutable ###');
import Immutable from 'immutable';
const obj_im = Immutable.fromJS({a: 1, b: 2, c: [3, 4, 5]});
console.log(obj_im);
console.log(obj_im.toJS());
