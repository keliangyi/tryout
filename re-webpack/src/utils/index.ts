

export const debounce = (fn:Function, ms = 0) => {
    let timeoutId:ReturnType<typeof setTimeout>
    return function(this:unknown, ...args:any[]) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}
