

/**
 * -现有100个洞依次排开
 * -我们没猜一次，如果猜对就完成
 * -若猜错，兔子将会跳到相邻的洞中
 * -如何实现:
 * -- n => n-1 or n+1
 * -- 肯定是要循环或者递归
 * -- guessed = {prev:n-1,guessed:n,next:n+1}
 * 
 * 
 * -- 猜测奇数，若错误则将是偶数，下一次就用偶数猜，增加了一半的几率
 * --- 第一次随机，然后就是奇数偶数周期循环
 * -- 是否需要将我猜过的数字存起来？
 * 
 * 
 */

type G = { prev: number, guessed: number, next: number }

const len = 100
const holes = Array.from(new Array(len).keys())
let initHole = 3

const guessed: G[] = []

const jump = () => {
    const prev = initHole
    let random = Math.random()
    if (prev === 0) {
        random = 0
    }
    if (prev === len) {
        random = 1
    }
    initHole = prev + (random > 0.5 ? -1 : 1)
    console.log(`兔子从${prev}，跳到${initHole}`);
}

const findRabbit = (idx: number) => {
    console.log('idx', idx);
    if (idx === initHole) {
        console.log(`${idx} is correct`);
        return
    }

    //猜错
    jump()
    const isEven = idx % 2 === 0
    // 若是奇数就用偶数猜，若是偶数则用奇数猜
    const myNewGuess = Math.floor(Math.random() * len)
    findRabbit(myNewGuess)
}


findRabbit(0)

