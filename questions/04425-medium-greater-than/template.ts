// type numberToTurple<K extends number, P extends unknown[] = []> =
// P['length'] extends K ? P : numberToTurple<K, [1, ...P]>
// type oot = numberToTurple<10>['length']
// type GreaterThan<T extends number, U extends number> =
// numberToTurple<U>['length']
type GreaterThan<T extends number, F extends number, U extends number[] = []> =
T extends U['length']
  ? false
  : F extends U['length']
    ? true
    : GreaterThan<T, F, [...U, 1]>
// type GreaterThan<T extends number, U extends number,
// F extends any[] = [], S extends any[] = []> =
// T extends F['length']
//   ? U extends S['length']
//     ? false
//     : false
//   : U extends S['length']
//     ? true
//     : GreaterThan<T, U, [...F, 1], [...S, 1]>
