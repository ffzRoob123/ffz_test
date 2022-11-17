// type RemoveIndexSignature<T extends object> = {
//   [P in keyof T]: P extends [key: infer X] ? never : T[P]
// }
type RemoveIndexSignature<T extends object> = {
  [K in keyof T as K extends K
    ? string extends K
      ? never
      : number extends K
        ? never
        : symbol extends K
          ? never
          : K
    : never]: T[K]
}
