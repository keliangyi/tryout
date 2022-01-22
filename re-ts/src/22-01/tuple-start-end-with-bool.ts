

type StartAndEndWithBool<T extends unknown[]> = [boolean, ...T, boolean]

type RxPipe = ['tap', 'filter', 'map']

type Res = StartAndEndWithBool<RxPipe>

const res: Res = [false, 'tap', 'filter', 'map', true]

export default res