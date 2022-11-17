type Block<B extends string> = `${B}`
type Element<E extends string[]> = E[number] extends never
  ? ''
  : `__${E[number]}`
type Modifier<M extends string[]> = M[number] extends never
  ? ''
  : `--${M[number]}`
type BEM<B extends string, E extends string[], M extends string[]> =
  `${Block<B>}${Element<E>}${Modifier<M>}`

// type BEM<B extends string, E extends string[], M extends string[]> =
// `${B}${E extends []
//   ? ''
//   : { [K in keyof E]: `__${E[K]}` }[number]}${M extends []
//     ? ''
//     : { [K in keyof M]: `--${M[K]}` }[number]}`
type arr1 = ['small', 'medium', 'large']
type ts<M extends string[]> = M extends []
  ? ''
  : { [K in keyof M]: `--${M[K]}` }
type t2 = ts<arr1>
type t3 = arr1[number]
type t4 = { [K in keyof arr1]: arr1[K] }
type t5 = { [K in keyof arr1]: arr1[K] }[number] // turple to union  [][number]
