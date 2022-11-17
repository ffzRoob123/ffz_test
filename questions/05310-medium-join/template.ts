type Join<T extends any[], U extends string | number> = T extends [
  infer X extends string,
  ...infer Y extends string[],
]
  ? Y extends []
    ? X
    : `${X}${U}${Join<Y, U>}`
  : ''
// type Join<T, U extends number | string> =
// T extends [infer F extends number | string, ...infer R]
//   ? R extends []
//     ? F
//     : `${F}${U}${Join<R, U>}`
//   : ''
