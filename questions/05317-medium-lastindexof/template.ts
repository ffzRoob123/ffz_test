type IsEqual<A, B> = (<T>() => T extends A ? 1 : 0) extends <T>() => T extends B
  ? 1
  : 0
  ? true
  : false

type LastIndexOf<T extends any[], U> = T extends [...infer R, infer L]
  ? IsEqual<L, U> extends true
    ? R['length']
    : LastIndexOf<R, U>
  : -1
