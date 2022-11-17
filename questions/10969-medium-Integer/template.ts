type Integer<T> = T extends number
  ? number extends T
    ? never
    : `${T}` extends `${infer _}.${infer _}`
      ? never
      : T
  : never
