import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

export function isNone(value: any) {
  return isNull(value) || isUndefined(value);
}