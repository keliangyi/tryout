
import axios from 'axios'

const http = axios.create()

http.interceptors.request.use(function (req) {
    console.log('【req】', req.url)
    return req
})

let f = true
http.interceptors.response.use(function (res) {
    console.log('【res】', res.config.url)
    return res
})


export {
    http
}