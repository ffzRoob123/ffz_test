// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }
// 默认是{}
type Chainable<OBJ = {}> = {
  option<K extends string, V>(
    // key可以取之前没取过的 或者 跟之前值类型不同的
    key: K extends keyof OBJ ? (V extends OBJ[K] ? never : K) : K,
    value: V
    // key可以取之后，移除原来的key，重新设置key和value的类型
  ): Chainable<Omit<OBJ, K> & { [Key in K]: V }>
  // 直接返回OBJ
  get(): OBJ
}

