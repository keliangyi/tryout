

type GetKey = <O extends object, K extends keyof O>(obj: O, key: K) => O[K]

const getKey: GetKey = (o, k) => o[k]

const obj = {
    name: "毛毛",
    age: 12,
    likes: [
        { title: "吃饭", id: 1 },
        { title: "睡觉", id: 2 },
        { title: "打豆豆", id: 3 },
    ]
}

const res = getKey(obj, 'age')


type Get = {
    <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1]
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(o: O, k1: K1, k2: K2): O[K1][K2]
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]>(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3]
}

const get: Get = (o: any, ...keys: string[]) => {
    let result = o
    keys.forEach(k => result = result[k])
    return result
}

const r = get(obj, 'likes', 1, 'title')
console.log(r);
