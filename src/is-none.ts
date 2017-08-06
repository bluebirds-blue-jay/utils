import { isNull, isUndefined } from 'lodash';

export function isNone(value: any) {
  return isNull(value) || isUndefined(value);
}