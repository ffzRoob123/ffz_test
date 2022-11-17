type FlipArguments<T extends (...arg: any[]) => any> = T extends (
  ...arg: infer P
) => infer R
  ? (...arg: Reverse<P>) => R
  : never
