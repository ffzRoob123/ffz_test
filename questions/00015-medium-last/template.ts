type Last<T extends any[]> = T extends [...infer _, infer last]
  ? last
  : never

