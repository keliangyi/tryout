
/**
 * 
 */
//@ts-ignore
Promise.myAll = function (promiseArr: Array<any>) {
    let success = 0
    const result: any[] = []
    return new Promise((resolve, reject) => {
        for (let item of promiseArr) {
            Promise.resolve(item) // 传入的有可能不是 Promise
                .then((res) => {
                    result.push(res)
                    success++
                    if (success === promiseArr.length) {
                        resolve(result)
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        }
    })
}
//@ts-ignore
Promise.myRace = function (promiseArr: Array<any>) {
    return new Promise((resolve, reject) => {
        for (let item of promiseArr) {
            Promise.resolve(item) // 传入的有可能不是 Promise
                .then((res) => {
                    resolve(res) // 只要一个成功就返回
                })
                .catch((err) => {
                    reject(err)
                })
        }
    })
}

const timeOut = (p: Promise<any>) => {
    return Promise.race([
        p,
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeOut')), 5000))
    ])
}
