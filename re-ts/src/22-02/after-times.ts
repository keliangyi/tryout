
/** 
 * after 函数执行多少次后才调用传入的函数
 * 
 */


type after = {
    (fn: Function, times: number): Function
}


const after: after = (fn, times) => {
    return function () {
        times--
        console.log('times', times);
        if (!times) {
            fn()
        }
    }
}


const f1 = after(() => {
    console.log('after 3')
}, 3)

f1()
f1()
f1()


// 简化异步操作

const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 900)
    })
}

const afterFour: after = (fn, times) => {
    const arr: number[] = []
    return function (n: number) {
        arr.push(n)
        if (arr.length === times) {
            fn(arr)
        }
    }
}

const log = (arr: number[]) => {
    console.log(arr)
}

const add = afterFour(log, 4)

fetch().then(n1 => {
    add(n1)
})
fetch().then(n1 => {
    add(n1)
})
fetch().then(n1 => {
    add(n1)
})
fetch().then(n1 => {
    add(n1)
})

export { }