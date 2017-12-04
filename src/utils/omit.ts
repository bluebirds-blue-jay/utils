import * as Lodash from 'lodash';

export type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};

export function omit<T, K extends keyof T>(obj: T, keys: K|K[]): Omit<T, K> {
  return Lodash.omit(obj, keys);
}
