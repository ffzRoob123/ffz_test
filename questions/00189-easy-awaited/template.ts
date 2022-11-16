type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer X>
  ? X extends PromiseLike<any>
    ? MyAwaited<X>
    : X
  : never
// type MyAwaited<T> = T extends Promise<infer U>
//   ? MyAwaited<U>
//   : T extends {
//     then: (onfullfilled: (arg: infer S) => any) => any
//   }
//     ? S
//     : T
