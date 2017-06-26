import _isArguments = require('lodash.isarguments');

export function isArguments(value: any): boolean {
  return _isArguments(value);
}