type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T['length']
      ? false
      : true
    : false
// type IsTuple<T> = [T] extends [never]
//   ? false
//   : T extends readonly [infer F, ...infer R] | []
//     ? true
//     : false
type op = number extends [number]['length'] ? true : false
type fu = [number]['length']

