console.log('+------------+');
console.log('| validation |');
console.log('+------------+');

console.log('/* is.js */');
import is from 'is_js';
console.log(is.not.integer(1));

console.log();

console.log('/* JSON Schema */');
import {validate} from 'jsonschema';
const json = {
  a: 1,
};
const schema = {
  type      : 'object',
  properties: {
    a: {type: 'integer'},
  },
  required: ['a'],
}
console.log(validate(json, schema));

console.log();
