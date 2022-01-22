function assertFn(condition: boolean, message: string): asserts condition {
    if (!condition) {
        throw Error(message)
    }
}

function assertIsNumber(target: unknown, message: string): asserts target is number {
    if (typeof target !== 'number') {
        throw Error(message)
    }
}

function isNumber(a: unknown): a is number {
    return typeof a === 'number'
}

function range(form: number, to: number): number[]
function range(form: unknown, to: unknown): number[] {
    // assertIsNumber(form, 'form must be a number')
    // assertIsNumber(to, 'to must be a number')

    assertFn(typeof form === 'number' && typeof to === 'number', 'form & to must be a number')

    let res: number[] = []
    for (let i = form; i < to; i++) {
        res.push(i)
    }
    return res
}