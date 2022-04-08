


function myNew(fn: Function, ...args: any[]) {
    const obj = {}
    //@ts-expect-error
    obj.__proto__ = fn.prototype
    fn.call(obj, args)
    return obj
}

console.log(myNew.prototype);
