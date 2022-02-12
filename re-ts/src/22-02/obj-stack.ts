

let arr = [1, 2, 3]
let obj = {}

function fun(arrTemp: Array<number>, objTemp: Record<string, number>) {
    arrTemp = []
    objTemp.a = 1
    objTemp = { b: 2 }
}

fun(arr, obj)

console.log('arr=', arr, 'obj=', obj);


export { }