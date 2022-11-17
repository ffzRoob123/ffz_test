// type Trunc<T extends number | string> = `${T}` extends `${infer F}${infer R}`
//   ? F extends '.'
//     ? ''
//     : `${F}${Trunc<R>}`
//   : ''
type Trunc<T extends string | number> = `${T}` extends `${infer H}.${number}`
  ? H
  : `${T}`
