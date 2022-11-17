// type DropChar<S extends string, C extends string> =
// S extends `${infer _ extends C}${infer rest}`
//   ? rest extends `${infer _ extends C}${infer rest2}`
//     ? DropChar<rest2, C>
//     : rest
//   : S
type DropChar<S extends string, C> =
S extends `${infer first}${infer rest}`
  ? first extends C
    ? `${''}${DropChar<rest, C>}`
    : `${first}${DropChar<rest, C>}`
  : ''
