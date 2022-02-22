

interface Function {
    before: <T>(fn: Function) => ((...args: T[]) => void)
}
function sayName(name: string) {
    console.log('hello ' + name);
}

Function.prototype.before = function (this, fn: Function) {
    return (...args) => {// this
        fn()
        this(...args)
    }
}

const log = () => {
    console.log(Date.now())
}

const sayNameWithBefore = sayName.before<string>(log)
sayNameWithBefore('ss')

