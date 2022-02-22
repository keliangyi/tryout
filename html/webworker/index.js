


const ul = document.getElementById('list')
const num = document.getElementById('num')
const loading = document.getElementById('loading')
const work = new Worker('./worker.js')


let str = ''
Array.from(new Array(15).keys()).forEach(i => {
    str += `<li>${i}</li>`
})
ul.innerHTML = str


num.onchange = function () {
    work.postMessage(num.value)
    loading.innerHTML = '计算中。。。'
}

work.onerror = function (err) {
    console.error('err:', err)
}
work.onmessage = function (e) {
    console.log(e);
    loading.innerHTML = `计算完成，结果是：${e.data}`
}