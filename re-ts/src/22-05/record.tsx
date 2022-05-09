export {}

type Ka = keyof any // type Ka = string | number | symbol

type AnyObject<R> = { [P in keyof any]: R }
