type Flip<T> = {
  [U in keyof T as U extends string
    ? T[U] extends string | number | symbol
      ? T[U]
      : T[U] extends boolean
        ? `${T[U]}`
        : never
    : never]: U
}

