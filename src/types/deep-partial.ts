type Value<T> = T extends AllowedPrimitives ? T : DeepPartial<T>;
type AllowedPrimitives = boolean | string | number | Date;
export type DeepPartial<T> = {
  [P in keyof T]?:  T[P] extends (infer U)[] ? Value<U>[] : Value<T[P]>;
};
