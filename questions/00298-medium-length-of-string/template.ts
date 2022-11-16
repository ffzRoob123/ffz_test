// HELLO
// type StringToTuple<S extends string> = S extends `${S[0]}${infer Rest}`
//   ? [S[0], ...StringToTuple<Rest>]
//   : []
// type LengthOfString<S extends string> = StringToTuple<S>['length']

type LengthOfString2<S extends string, Arr extends string[] = []> = S extends ''
  ? Arr['length']
  : S extends `${infer F}${infer L}`
    ? LengthOfString2<L, [...Arr, F]>
    : Arr['length']
