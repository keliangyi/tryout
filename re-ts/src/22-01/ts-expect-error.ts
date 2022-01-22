
// 使用 @ts-expect-errord 代替 @ts-ignore；
// `@ts-ignore 会忽略所有，不管对与错
// `@ts-expect-error 只有当错误的时候才会忽略，正确的时候它不会忽略，而是报错 Unused '@ts-expect-error' directive.

//@ts-expect-error //当 name1 不是字符串是时时正常的，而是字符串是就报错 Unused
const name1: string = 44

//@ts-ignore
const name2: string = 1245

