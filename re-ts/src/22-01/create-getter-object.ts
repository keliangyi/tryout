

function createGetterObject<Tobj extends Record<string, any>>(obj: Tobj): PropGetter<Tobj> {
    const newObj = Object.create(null)
    for (const key of Object.keys(obj)) {
        const CapitalizeKey = key[0].toUpperCase() + key.substring(1)
        newObj[`get${CapitalizeKey}`] = () => obj[key]
    }
    return newObj
}

type PropGetter<T> = {
    // [K in keyof T as `get${Capitalize<K extends string ? K : never>}`]: () => T[K]
    [K in (string & keyof T) as `get${Capitalize<K>}`]: () => T[K]
}

const user = createGetterObject({
    name: 'maomao',
    age: 18
})
user.getName()
console.log(user.getAge());

export { }

