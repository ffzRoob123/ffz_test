// type ObjectEntries<T, K = keyof T> = K extends keyof T
//   ? [K, T[K] extends undefined ? undefined : Exclude<T[K], undefined>]
//   : never

// type ObjectEntries<T, K = keyof T> = K extends keyof T
//   ? [K, T[K] extends undefined ? undefined : Required<T>[K]]
//   : never

type ObjectEntries<T, K = keyof T> = K extends keyof T
  ? [K, [Required<T>[K]] extends [never] ? undefined : Required<T>[K]]
  : never
