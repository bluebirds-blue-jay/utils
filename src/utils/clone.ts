import * as Lodash from 'lodash';

export function clone<T>(object: T): T {
  return Lodash.clone(object);
}