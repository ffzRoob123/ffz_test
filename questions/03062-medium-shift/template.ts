type Shift<T extends any[]> = T extends [infer _, ...infer Y] ? Y : []
