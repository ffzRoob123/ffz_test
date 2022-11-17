type FilterType<T> = T extends number
  ? number
  : T extends boolean
    ? boolean
    : T extends string
      ? string
      : T extends symbol
        ? symbol
        : T extends bigint
          ? bigint
          : never
type ToPrimitive<T extends object> = {
  [K in keyof T]: T[K] extends object ? ToPrimitive<T[K]> : FilterType<T[K]>
}
