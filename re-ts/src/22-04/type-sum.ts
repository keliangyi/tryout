type NumberToArray<N, R extends any[] = []> = R['length'] extends N ? R : NumberToArray<N, [...R, any]>

type First<T extends number[]> = T extends [infer F, ...infer R] ? F : 0
type Tail<T extends number[]> = T extends [infer F, ...infer R] ? R : []

type Sum<N extends number[], R extends any[] = []> = N extends [] ? R['length'] : Sum<Tail<N>, [...R, ...NumberToArray<First<N>>]>
type Length<T extends readonly unknown[]> = T['length']
const d = [1, 2, 3, 4, 5, 1]
type Cases = [Sum<[1, 2, 3, 4, 5, 1]>, Length<typeof d>]

export {}
