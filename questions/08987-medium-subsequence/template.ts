// type ArrayExclude<T, U> = T extends [infer F, ...infer R]
//   ? F extends U
//     ? R
//     : [F, ...ArrayExclude<R, U>]
//   : []

// type Subsequence<T extends any[], U = T[number], I = U> =
//   I extends infer N extends any
//     ? [] | [N] | Subsequence<ArrayExclude<T, N>> | T
//     : []
type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
  ? [F, ...Subsequence<R>] | Subsequence<R>
  : []
