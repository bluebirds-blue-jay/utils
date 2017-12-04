import * as Lodash from 'lodash';

export function pick<T, K extends keyof T>(obj: T, keys: K | K[]): Pick<T, K> {
  return <any>Lodash.pick(obj, keys);
}
