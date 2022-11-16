// type StringToUnion<T extends string> =
//   T extends `${infer first}${infer rest}` ? first | StringToUnion<rest> : never
type StringToTuple<T extends string> = T extends `${infer F}${infer Rest}`
  ? [F, ...StringToTuple<Rest>]
  : []
type StringToUnion<T extends string> = StringToTuple<T>[number]
