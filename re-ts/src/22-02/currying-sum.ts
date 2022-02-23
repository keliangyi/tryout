
function sum(...nums: number[]) {
    return nums.reduce((a, c) => a + c, 0)
}

function currying(fn: Function, ...args: number[]) {
    return function cb(...nums: number[]) {
        if (!nums.length) {
            return fn(...args)
        } else {
            args.push(...nums)
            return cb
        }
    }
}

const r1 = currying(sum, 2, 4)(1)()
console.log(r1);

/** ======= */


function foo(...args: number[]) {

    const fn = function (...nums: number[]) {
        args = args.concat(...nums)
        return fn
    }

    fn.sum = () => {
        const s = args.reduce((a, c) => a + c, 0)
        console.log('d', s);
        return s
    }

    return fn
}


const f1 = foo(1, 2, 3)
console.log(f1);

f1.sum() ///6
const f2 = foo(1,)(2, 3)
f2.sum() ///6
const f3 = foo(1)(2)(3)(4)
f3.sum() ///10


export { }
