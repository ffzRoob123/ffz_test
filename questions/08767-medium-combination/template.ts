type Combination<T extends string[], U = T[number], I = U> = I extends U
  ? I extends string
    ? I | `${I} ${Combination<T, Exclude<U, I>>}`
    : never
  : never
// type Combination<T extends string[], U = T[number], I = U> =
//   I extends infer S extends string
//     ? S | `${S} ${Combination<T, Exclude<U, I>>}`
//     : never
