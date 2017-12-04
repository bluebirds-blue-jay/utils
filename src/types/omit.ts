import { Diff } from './diff';

export type Omit<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};