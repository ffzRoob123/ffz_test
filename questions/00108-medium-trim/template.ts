type str = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${str}${infer Rest}`
  ? Trim<Rest>
  : S extends `${infer Rest2}${str}`
    ? Trim<Rest2>
    : S

// type Trim<S extends string> = S extends ''
//   ? S
//   : S extends `${str}${infer TTail}`
//     ? Trim<TTail>
//     : S extends `${infer THead}${str}`
//       ? Trim<THead>
//       : S
