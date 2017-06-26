import _isSet = require('lodash.isset');

export function isSet(value: any): boolean {
  return _isSet(value);
}