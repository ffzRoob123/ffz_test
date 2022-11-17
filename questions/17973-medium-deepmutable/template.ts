type DeepMutable<T extends Record<keyof any, any>> = T extends (
  ...args: any[]
) => any
  ? T
  : {
      -readonly [K in keyof T]: DeepMutable<T[K]>
    }
// type Value = | string | number | symbol | boolean
// | bigint | undefined | null | Function

// type DeepMutable<T extends Record<PropertyKey, any>> = {
//   -readonly [P in keyof T]: T[P] extends Value ? T[P] : DeepMutable<T[P]>
// }
