


const timeout = (timer: number) => new Promise((_, reject) => {
    setTimeout(() => {
        reject('Promise Time Out')
    }, timer)
})

const PromiseTimeout = (task: Promise<any>, time: number) => {
    return Promise.race([task, timeout(time)])
}

const task = new Promise((resolve,) => {
    setTimeout(() => {
        resolve(337845818)
    }, 2000)
})

// PromiseTimeout(task, 1000).then(r => {
//     console.log(r);
// }).catch(err => {
//     console.error(err)
// })



console.log('script start');

const async1 = async () => {
    return await task
}

const async2 = async () => {
    await async1()
    console.log('async2');
}

new Promise((resolve) => {
    console.log('new p1');
    resolve('p1')
    setTimeout(() => {
        resolve('p2')
    }, 100)
}).then(r => {
    console.log(r);
})
async2()
setTimeout(() => {
    console.log('setTimeout');
})
console.log('script end');

