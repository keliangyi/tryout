
import Koa from 'koa'
import https from 'https'
import fs from 'fs'
import path from 'path'
// @ts-ignore
import sslify from 'koa-sslify'

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

app.use(sslify()) 
https.createServer(options, app.callback()).listen('5959', );

export default app