type TPrimitives = boolean | string | number | Date | symbol;

export type DeepPartial<T> = {
  [P in keyof T]?:  T[P] extends TPrimitives
    ? T[P]
    : T extends (infer U)[]
      ? U extends TPrimitives
        ? U[]
        : DeepPartial<U>[]
      : DeepPartial<T[P]>;
};
