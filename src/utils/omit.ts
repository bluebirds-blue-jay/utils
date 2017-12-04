import * as Lodash from 'lodash';
import { Omit } from '../types/omit';

export function omit<T, K extends keyof T>(obj: T, keys: K|K[]): Omit<T, K> {
  return <any>Lodash.omit(obj, keys);
}
