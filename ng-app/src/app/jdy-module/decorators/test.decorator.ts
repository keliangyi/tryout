export function Emoji() {
    return (target: object, key: string | symbol) => {
        let val = target[key]
        const getter = () => {
            return val
        }
        const setter = (value: string) => {
            console.log('更新表情')
            val = `😂${value}`
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

export function Confirmable(message: string): Function {
    return function (target: object, key: string | symbol, descriptor: PropertyDescriptor) {
        const oldVal = descriptor.value
        descriptor.value = function (this: typeof target, ...args: any[]) {
            const allow = window.confirm(message)
            if (allow) {
                const res = oldVal.apply(this, args)
                return res
            }
            return null
        }
    }
}