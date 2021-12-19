type WeekDay = 'mon' | 'tue' | 'wed' | 'thu' | 'fri'
type Day = 'sat' | 'sun' | WeekDay

const nextDay: Record<WeekDay, Day> = {
    mon: 'tue',
    tue: 'wed',
    wed: "thu",
    thu: 'fri',
    fri: 'sat',
}

const nextDay1: { [K in WeekDay]: Day } = {
    mon: 'tue',
    tue: 'wed',
    wed: "thu",
    thu: 'fri',
    fri: 'sat',
}

const Obj = {
    id: '001',
    label: 'dd',
    visible: false,
    likes: ['吃饭'],
    age: 12,
}

type CloneObjType<T extends object = {}> = { [K in keyof T]-?: T[K] }

const d1: CloneObjType<typeof Obj> = {
    age: 1,
    visible: true,
    id: "4",
    likes: ['a'],
    label: 's'
}

type MyRecord<T extends string | number | symbol, K> = { [O in T]: K }

type S = MyRecord<'left' | 1, number>

const d12: S = { left: 1, 1: 1 }

// 伴生对象模式，导出同名的类型和值，在使用的地方只需要导入一次，既可以当类型用，也可以当值用

export type Currency = {
    unit: "USD" | 'CNY' | 'EUR',
    value: number
}
export const Currency: Record<string, any> = {
    default: 'USD',
    from(value: number, unit = Currency.default): Currency {
        return { unit, value }
    }
}
