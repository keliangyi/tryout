

const jia = (x: number) => x + 1

const cheng = (x: number) => x * 5

const jian = (x: number) => x - 2

const compose = (...fns: Function[]) => (initial: number) => fns.reduceRight((acc, curr) => curr(acc), initial)

const res = compose(jia, jian, cheng)(10)

// console.log(res)

const compose1 = (...fns: Function[]) => fns.reduce((a, c) => (...args: any[]) => a(c(...args)))
const c = compose1(jia, jian, cheng)

console.log(c(10));


export { }
