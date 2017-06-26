import _pick = require('lodash.pick');

export function pick<T extends object>(obj: T, props: (keyof T)[]): {} {
  return _pick(obj, props);
}