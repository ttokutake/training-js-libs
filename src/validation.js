console.log('### is ###');
import is from 'is_js';
console.log(is.not.integer(1));

console.log('### JSON Schema ###');
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
