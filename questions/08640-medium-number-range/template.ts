//                         L -> 0            H -> 2   [0, 1 ,2]
// type NumberRange<L extends number, H extends number, U extends unknown[] = [1]> =
// H extends U['length'] ? L | U['length']
type NumberRange<L, H, F extends unknown[] = [], R extends unknown[] = []> =
L extends H
  ? R[number] | H
  : F['length'] extends L
    ? NumberRange<[...F, unknown]['length'], H, [...F, unknown], [...R, L]>
    : NumberRange<L, H, [...F, unknown]>
