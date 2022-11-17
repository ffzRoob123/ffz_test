// type PercentageParser<A extends string> = A extends `${infer first extends
//   | "+"
//   | "-"}${infer rest}`
//   ? rest extends `${infer F}%`
//     ? [first, F, "%"]
//     : [first, rest, ""]
//   : A extends `${infer F}%`
//   ? ["", F, "%"]
//   : ["", A, ""]
type GetSign<A extends string> =
A extends `${infer Sign extends '+' | '-'}${string}` ? Sign : ''

type GetPercent<A extends string> =
A extends `${GetSign<A>}${string}${infer Percent extends '%'}` ? Percent : ''

type GetValue<A extends string> =
A extends `${GetSign<A>}${infer Value extends number}${GetPercent<A>}`
  ? `${Value}`
  : ''

type PercentageParser<A extends string> = [GetSign<A>, GetValue<A>, GetPercent<A>]
