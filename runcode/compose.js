const compose = (...fns) => fns.reduceRight((a, c) => (...args) => a(c(...args)))

const fna = (p) => {
    console.log('fn-a', p)
    return p + 1
}
const fnb = (p) => {
    console.log('fn-b', p)
    return p + 1
}
const fnc = (p) => {
    console.log('fn-c', p)
    return p + 1
}
const fnd = (p) => {
    console.log('fn-d', p)
    return p + 1
}
const fne = (p) => {
    console.log('fn-e', p)
    return p + 1
}

const afterCompose = compose(fna, fnb, fnc, fnd, fne,)
const res = afterCompose(1)
console.log(res);