

// function solve(m: number, n: number) {
//     return m.toString(n)
// }
/**
 * 当N小于M时，该是多少就是多少
 * 当
 * 
 * 0，1，2，3，4，5，6，7，8，9，10，11，12，13，14，15，16，17，18，19，20，21
 * 0，1，10，11，
 * 0，1，2，3，4，5，6，7，8，9，a，10，11，12，13，14，15，16，17，18，19，1a，
 * 
 * @param M 
 * @param N 
 * @returns 
 */
function solve(M: number, N: number) {
    let res = [];
    // 注意这里要 = 号
    while (M >= N) {
        res.push(M % N);
        M = Math.floor(M / N);
    }
    res.push(M);
    return res.reverse().join('');
}
console.log(solve(55, 12))