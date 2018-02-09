import * as Lodash from 'lodash';
import { Collection } from '@bluejay/collection';

export function clone<T>(object: T): T {
  return Lodash.cloneWith(object, value => {
    if (Collection.isCollection(value)) {
      return value.clone();
    }

    return undefined;
  });
}