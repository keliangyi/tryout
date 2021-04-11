
// 元祖类型推导
const tuple = <T extends unknown[]> ( ...ts:T ):T => ts 
const colors = ['red','purple','blue','white',]

const cc = tuple(...colors)
type colorTuple = typeof cc



//类型防护措施  is 运算符
function isBadString(a:unknown):boolean{
    return typeof a === 'string'
}

function isGoodString (a:unknown): a is string {
    return typeof a === 'string'
}

const testIsStaring = (a:unknown) => {
    if(isBadString(a)){
        // return a.toUpperCase()  // 错误！ typeof 细化类型能力有限只能在它当前的作用域中
    }
    if(isGoodString(a)){
        return a.toUpperCase()
    }
}

// 条件类型 & 条件分配

type IsString<T> = T extends string ? true : false
type A = IsString<string> // true
type B = IsString<number> // false

type Both<T , U> = U extends T ? U : never
type Without<T , U> = T extends U ? never : T


/**
 * TS 计算类型步骤：
 * 1、type A = Without<string|number|boolean, boolean>
 * 2、type A = Without(string,boolean) |  Without(number,boolean) |  Without(boolean,boolean)
 * 3、type A = (string extends boolean ? never : string) | (number extends boolean ? never : number) | (boolean extends boolean ? never : boolean)
 * 4、type A = string | number | never
 * 5、type A = string | number 
 */
type TestWithout = Without<string|number|boolean, boolean|number> //  string | number
