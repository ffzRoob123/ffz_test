type ConstructTuple<L extends number, U extends unknown[] = []> =
L extends U['length'] ? U : ConstructTuple<L, [unknown, ...U]>
