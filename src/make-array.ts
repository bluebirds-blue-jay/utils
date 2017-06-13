import { isSet } from './is-set';
import { isArguments } from './is-arguments';

export function makeArray<T>(value: T[] | IArguments | T | Set<T>): T[] {
  if (Array.isArray(value)) {
    return value;
  }

  if (isSet(value) || isArguments(value)) {
    return Array.from(value);
  }

  return [value];
}