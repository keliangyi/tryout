type E = Extract<'a', 'a' | 'c'> // a

// 应用 替换泛型约束中的extends:

// 接收两个参数，并且都是对象
/**
 * 方法1：extends
 * @param o1
 * @param o2
 * @returns
 */
function merge1<T extends object, U extends object>(o1: T, o2: U): T & U {
	return { ...o1, ...o2 }
}

// merge1(1, 2) //Error
merge1({ a: 1 }, { b: 2 })

/**
 * 方法2：Extract，
 * 当 T 和 U extends object 时才是 T 和 U，否则就是 never
 * @param o1
 * @param o2
 * @returns
 */
function merge2<T, U>(o1: Extract<T, object>, o2: Extract<U, object>): T & U {
	return { ...o1, ...o2 }
}

// merge2(1, 2) //Error 类型“number”的参数不能赋给类型“never”的参数。ts(2345)
merge2({ a: 1 }, { b: 2 })

// 简化 方法2
type MustObj<T> = Extract<T, object>
function merge3<T, U>(o1: MustObj<T>, o2: MustObj<U>): T & U {
	return { ...o1, ...o2 }
}

// merge3(1, 2) //Error 类型“number”的参数不能赋给类型“never”的参数。ts(2345)
merge3({ a: 1 }, { b: 2 })

export {}
