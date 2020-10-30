type AllowedPrimitives = boolean | string | number | Date;

type Value<T> = T extends AllowedPrimitives ? T : DeepPartial<T>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? Value<U>[]
    : Value<T[P]>;
};
