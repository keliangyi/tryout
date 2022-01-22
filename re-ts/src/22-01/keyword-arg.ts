

type KeyWordAarg = [name: string, age: number, address: string]

function argsToObj(...args: KeyWordAarg) {
    console.log(args);
    return {}
}


argsToObj('maomao', 15, 'china')