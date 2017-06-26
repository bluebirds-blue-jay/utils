import _isEmpty  = require('lodash.isempty');

export function isEmpty(value: any) {
  return _isEmpty(value) || value === '' || /^\s*$/.test(value);
}