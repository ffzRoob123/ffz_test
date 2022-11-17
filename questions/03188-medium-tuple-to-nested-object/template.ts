type TupleToNestedObject<T extends unknown[], U> = T extends []
  ? U
  : T extends [infer Head extends PropertyKey, ...infer Tail]
    ? {
        [K in Head]: TupleToNestedObject<Tail, U>
      }
    : never
