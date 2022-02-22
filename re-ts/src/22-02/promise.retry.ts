

const getRandomNumber = () => {
    return new Promise<number>((resolve, reject) => {
        const num = Math.random()
        setTimeout(() => {
            console.log('n', num);
            if (num > 0.7) {
                resolve(num)
            } else {
                reject(num)
            }
        }, 900)
    })
}

declare global {
    interface PromiseConstructor {
        retry<T>(fn: () => Promise<T>, times: number): Promise<T>
    }
}

Promise.retry = function (fn, times) {
    return new Promise(async (resolve, reject) => {
        while (times > 0) {
            times--
            try {
                const res = await fn()
                resolve(res)
                return
            } catch (error) {
                // reject('error')
            }
        }
        reject(`retry and error`)
    })
}

const r1 = Promise.retry<number>(getRandomNumber, 3).then(r => {
    console.log(r);
}).catch((e: any) => {
    console.log(e);
})

export { }