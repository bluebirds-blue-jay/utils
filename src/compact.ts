import _compact = require('lodash.compact');

export function compact<T = any>(arr: T[]): T[] {
  return _compact(arr);
}