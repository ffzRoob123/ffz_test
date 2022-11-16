type Pop<T extends any[]> = T extends []
  ? []
  : T extends [...infer before, infer _]
    ? before
    : never
