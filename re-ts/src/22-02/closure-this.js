
// 'use strict'

const obj = {
    name: 'maomao',
    sayName() {
        console.log(`hello my name is ${this.name}`);
        return function () {
            console.log(this.name) // undefined
        }
    },
    sayNameArrow() {
        console.log(`hello my name is ${this.name}`);
        return () => {
            console.log(this.name) // maomao
        }
    },
    anotherSayName() {
        return function inner() {
            this.name = 'inner' // 这个this 是指向 window 的 === window.name = 'inner'，严格模式会报错
            return function () {
                // 这里的this 也是 window，但是 上面的inner 中给 window 添加了 name 属性
                console.log(this.name) // inner
            }
        }
    }
}


// const fn1 = obj.sayName
// fn1() // === fn1.call(undefined,...)

const fn2 = obj.sayName()
fn2()

const fn3 = obj.anotherSayName()()()

