// type Absolute<T extends number | string | bigint> =
// `${T}` extends `-${infer U}` ? U : `${T}`
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer R}`
  ? F extends '-'
    ? R
    : `${T}`
  : never
