type ReplaceAll<S extends string, From extends string, To extends string> =
From extends ''
  ? S
  : S extends `${infer before}${From}${infer after}`
    ? `${before}${To}${ReplaceAll<after, From, To>}`
    : S
