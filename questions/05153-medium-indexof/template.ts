type IndexOf<T, U, I extends unknown[] = []> = T extends [infer F, ...infer R]
  ? [Exclude<U, F>, Exclude<F, U>] extends [never, never]
      ? I['length']
      : IndexOf<R, U, [...I, 1]>
  : -1
// Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
// Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
type a = [Exclude<'a', string>, Exclude<string, 'a'>]
type a1 = [Exclude<1, any>, Exclude<any, 1>]
