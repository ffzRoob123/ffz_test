type TrimRight<S extends string> =
S extends `${infer F}${' ' | '\n' | '\t'}` ? TrimRight<F> : S
