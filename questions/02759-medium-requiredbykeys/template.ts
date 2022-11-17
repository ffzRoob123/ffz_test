type RequiredByKeys<T, K extends keyof T = keyof T> = {
  [key in Exclude<keyof T, K>]?: T[key]
} & {
  [key in K]-?: T[key]
} extends infer R
  ? {
      [Key in keyof R]: R[Key]
    }
  : never
// type Merge2<T> = {
//   [K in keyof T]: T[K]
// }
// type RequiredByKeys<T, K extends PropertyKey = keyof T> = Merge2<
//   T & Required<Pick<T, K extends keyof T ? K : never>>
// >
