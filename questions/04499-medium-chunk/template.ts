// type Chunk<T extends any[], N extends number,
// temp extends any[] = [], result extends any[] = []> =
// T extends [infer r, ...infer rest]
//   ? [...temp, r]['length'] extends N
//       ? Chunk<rest, N, [], [...result, [...temp, r]]>
//       : Chunk<rest, N, [...temp, r], [...result]>
//   : temp extends []
//     ? result
//     : [...result, temp]

type Chunk<T extends any[], U extends number = 1, S extends any[] = []> =
T extends [infer F, ...infer R]
  ? S['length'] extends U
    ? [S, ...Chunk<T, U>]
    : Chunk<R, U, [...S, F]>
  : S['length'] extends 0
    ? S
    : [S]
