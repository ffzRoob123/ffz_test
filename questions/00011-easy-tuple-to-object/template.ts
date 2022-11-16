// type TupleToObject<T extends readonly any[]> = any
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}
// const tuple1 = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type t = TupleToObject<typeof tuple1>
