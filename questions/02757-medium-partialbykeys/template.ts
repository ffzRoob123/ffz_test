// type PartialByKeys<T, K extends string> = {
//   [P in keyof T as P extends K ? [P?] : P]: T[P]
// }
type Merge1<T> = {
  [Key in keyof T]: T[Key]
}
type PartialByKeys<T, K extends keyof T = keyof T> = Merge1<
  {
    [Key in keyof T as Key extends K ? Key : never]?: T[Key]
  } & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
  }
>
// type cases = [
//     Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
//     Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
//     Expect<Equal<PartialByKeys<User>, Partial<User>>>,
//     Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
//   ]
