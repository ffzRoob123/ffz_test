// type Includes<T extends any[], U> = T extends [infer F, ...infer R]
//   ? Equal<F, U> extends true
//     ? true
//     : Includes<R, U>
//   : false
type Unique<T extends any[]> = T extends [...infer R, infer L]
  ? Includes<R, L> extends true
    ? Unique<R>
    : [...Unique<R>, L]
  : []
