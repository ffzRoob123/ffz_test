type Diff<O extends object, O1 extends object> = {
  [key in Exclude<keyof (O & O1), keyof (O | O1)>]: (O & O1)[key]
}

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: number
  gender: number
}
type k1 = keyof(Foo & Bar)
type k2 = keyof(Foo | Bar)
type k3 = Exclude<k1, k2>
type k4 = (Foo & Bar)[k3]
type k5 = Diff<Foo, Bar>
