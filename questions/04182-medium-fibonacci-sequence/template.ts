// type Fibonacci<T extends number, U extends any[] = [], K extends any[] = []> =
// U['length'] extends T ? K['length'] : K
type Fibonacci<T extends number, C extends unknown[] = [],
U1 extends unknown[] = [], U2 extends unknown[] = [1]> =
T extends C['length']
  ? U1['length']
  : Fibonacci<T, [1, ...C], U2, [...U1, ...U2]>
// T -> 1 U1 -> [1]               U2 -> [1]                         C -> [1]
// T -> 2 U1 -> [1]               U2 -> [1,1]                       C -> [1,1]
// T -> 3 U1 -> [1,1]             U2 -> [1,1,1]                     C -> [1,1,1]
// T -> 4 U1 -> [1,1,1]           U2 -> [1,1,1,1,1]                 C -> [1,1,1,1]
// T -> 5 U1 -> [1,1,1,1,1]       U2 -> [1,1,1,1,1,1,1,1]           C -> [1,1,1,1,1]
// T -> 6 U1 -> [1,1,1,1,1,1,1,1] U2 -> [1,1,1,1,1,1,1,1,1,1,1,1,1] C -> [1,1,1,1,1]
/**
 * list[n - 1] + list[n - 2] = list[n]
 * C 记录计算到第几个了
 * U1 记录第C个斐波那契值
 * U2 记录第C + 1个斐波那契值
 */
