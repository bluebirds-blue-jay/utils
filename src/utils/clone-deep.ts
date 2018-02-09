import * as Lodash from 'lodash';
import { Collection } from '@bluejay/collection';

export function cloneDeep<T>(object: T): T {
  return Lodash.cloneDeepWith(object, value => {
    if (Collection.isCollection(value)) {
      return value.cloneDeep();
    }

    return undefined;
  });
}
