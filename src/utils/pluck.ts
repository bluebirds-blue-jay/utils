import * as Lodash from 'lodash';

export function pluck<T, K extends keyof T>(objs: T[], key: K): T[K][] {
  return Lodash.map(objs, key);
}
