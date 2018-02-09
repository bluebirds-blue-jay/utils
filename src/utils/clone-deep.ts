import * as Lodash from 'lodash';

export function cloneDeep<T>(object: T): T {
  return Lodash.cloneDeep(object);
}
