// type TrimLeft<S extends string> = any
// type TrimLeft<S extends string> = S extends ''
//   ? ''
//   : S extends `${infer H}${infer Rest}`
//     ? H extends ' ' | '\n' | '\t'
//       ? TrimLeft<Rest>
//       : S
//     : never
type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
