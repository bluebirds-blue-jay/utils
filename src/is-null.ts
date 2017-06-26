import _isNull = require('lodash.isnull');

export function isNull(value: any): boolean {
  return _isNull(value);
}