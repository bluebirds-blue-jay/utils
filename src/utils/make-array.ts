import { isArguments, isSet } from 'lodash';

export function makeArray<T>(value: T[] | IArguments | T | Set<T>): T[] {
  if (Array.isArray(value)) {
    return value;
  }

  if (isSet(value) || isArguments(value)) {
    return Array.from(<T[] | IArguments | Set<T>>value);
  }

  return [<T>value];
}
