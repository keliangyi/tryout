/**
 * Generator 斐波那契数列
 * a0 = 0
 * a1 = 1
 * an = a(n-1) + a(n-2)
 * 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987
 */
function *Fibonacci(){
    let a = 0
    let b = 1
    while(true){
        yield a;
        [ a, b ] = [ b, b + a ]     
    }  
}

const arr:number[] = []
const num = Fibonacci()

document.getElementById('Fibonacci')?.addEventListener('click',function() {  
    const c = num.next()    
    if(!c.done){
        arr.push(c.value)
        const show = document.getElementById('numbers')
        if(show){
            show.innerHTML = arr.join(',')
        }        
    }
})
    


const fib = (n:number):number => n > 1 ? (fib(n - 1) + fib(n - 2)) : n

const f1 = new Array(20).fill('').map((_,i) => fib(i))

const show1 = document.getElementById('show1')
if(show1){
    show1.innerHTML = f1.join(',')
}
   