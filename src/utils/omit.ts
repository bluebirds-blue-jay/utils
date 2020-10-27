import * as Lodash from 'lodash';

export function omit<T extends object, K extends keyof T>(obj: T, keys: K|K[]): Omit<T, K> {
  return Lodash.omit(obj, keys);
}
