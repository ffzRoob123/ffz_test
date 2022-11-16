// type LengthOfString<S extends string> = number

type LengthOfString<S extends string, Arr extends string[] = []> = S extends ''
  ? Arr['length']
  : S extends `${infer F}${infer L}`
    ? LengthOfString<L, [...Arr, F]>
    : Arr['length']
