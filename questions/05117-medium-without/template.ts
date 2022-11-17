type ToUnion<T> = T extends [infer F, ...infer R] ? F | ToUnion<R> : T

type Without<T, U> = T extends [infer F, ...infer R]
  ? F extends ToUnion<U>
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : []
// type Without<T, U> = T extends []
//   ? T
//   : T extends [infer Head, ...infer Tail]
//     ? Head extends (U extends unknown[] ? U[number] : U)
//       ? Without<Tail, U>
//       : [Head, ...Without<Tail, U>]
//     : never
