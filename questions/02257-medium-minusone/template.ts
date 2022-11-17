// type MinusOne<T extends number, A extends string[] = []> = T extends 0
//   ? -1
//   : 0 extends 1
//     ? never
//     : ['', ...A]['length'] extends T
//         ? A['length']
//         : MinusOne<T, ['', ...A]>
// type Tuple<L extends number, T extends unknown[] = []> = T['length'] extends L
//   ? T
//   : Tuple<L, [...T, unknown]>
// type MinusOne<T extends number> = Tuple<T> extends [...infer L, unknown]
//   ? L['length']
//   : never
type ParseInt<T extends string> = T extends `${infer Digit extends number}`
  ? Digit
  : never
type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : ''
type RemoveLeadingZeros<S extends string> = S extends '0'
  ? S
  : S extends `${'0'}${infer R}`
    ? RemoveLeadingZeros<R>
    : S
type InternalMinusOne<S extends string> =
  S extends `${infer Digit extends number}${infer Rest}`
    ? Digit extends 0
      ? `9${InternalMinusOne<Rest>}`
      : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`
    : never
type MinusOne<T extends number> = T extends 0 ? -1 : ParseInt<
  RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>
>
type test = MinusOne<9007199254740992>
