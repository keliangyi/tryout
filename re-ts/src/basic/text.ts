
const text = '今天真是一个好日子啊！'
const myName:string = '毛毛 babel'

const msg = document.getElementById('msg')


if(msg){
    msg.innerHTML = `Hello ${ myName }, ${ text }`
}
