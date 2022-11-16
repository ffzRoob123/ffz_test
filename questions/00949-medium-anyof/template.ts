// type AnyOf<T extends readonly any[]> = any

type Falsy = 0 | '' | false | [] | { [P in any]: never } | undefined | null

type AnyOf<T extends readonly any[]> = T extends [infer H, ...infer T]
  ? H extends Falsy
    ? AnyOf<T>
    : true
  : false

// type AnyOf<T extends readonly any[]> = T extends []
//   ? false
//   : T extends [infer Head, ...infer Tail]
//   ? Head extends 0 | "" | false | [] | Record<string, never> | undefined | null
//     ? AnyOf<Tail>
//     : true
//   : never
// type emptyObj = Record<string, never>;
// type AnyOf<T extends readonly any[]> = T extends [infer firstElement, ...infer reset] ? (
//   firstElement extends (0 | '' | false | [] | undefined | emptyObj | null) ? AnyOf<reset> : true
//   )
//   : false
