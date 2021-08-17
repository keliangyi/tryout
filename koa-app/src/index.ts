
import Koa from 'koa'
import https from 'http'
import fs from 'fs'
import path from 'path'
// @ts-ignore
import sslify from 'koa-sslify'

import { Server } from 'socket.io'

import userName from './constant'
import registerRouter from './router'

const app = new Koa()

app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    await next()
})


registerRouter(app)


app.use(async (ctx, next) => {
    ctx.body = userName
    next()
})

/**
 * openssl genrsa -out server.key 1024
 * 
 * openssl req -new -key server.key -out server.csr
 * 
 * openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650
 */

const options = {
    key: fs.readFileSync(path.join(__dirname,'config/server.key'),'utf8'),
    cert: fs.readFileSync(path.join(__dirname,'config/server.crt'),'utf8')
}

// app.use(sslify()) 

const httpsServer = https.createServer(app.callback()).listen('5959', () => {
    console.log('httpsServer',5959);
    
})

const io = new Server(httpsServer)

io.on("connection", (socket) => {
    console.log(socket.id, '连接了');
    // const roomid = ''
    const c = new URLSearchParams(socket.request.url)
    console.log(c);

    socket.on('msg',(data)=>{        
        
        console.log(data);
        const isBig = data > 0.5 


        socket.emit('msg',`你好浏览器，我已收到你传递的随机数。它是${isBig ? '大' : '小' }于0.5的，对吧？`);
        
    })
    
    
})
  

export default app