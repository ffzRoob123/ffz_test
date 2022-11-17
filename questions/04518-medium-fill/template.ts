type PlusPlus<T extends number, C extends unknown[] = []> = C['length'] extends T
  ? [...C, unknown]['length']
  : PlusPlus<T, [...C, unknown]>

type Fill<T extends unknown[], N, Start extends number = 0,
End extends number = T['length'], P extends number = 0> = // 指针P初始值为0
Start extends End ? T // Start == End 终止程序
  : T extends [infer F, ...infer R]
    ? P extends Start
      ? [N, ...Fill<R, N, PlusPlus<Start>, End, PlusPlus<P>>] // 指针P == Start 时开始替换值 且 P、Start同时++
      : [F, ...Fill<R, N, Start, End, PlusPlus<P>>] // 指针P != Start 则P++
    : []
