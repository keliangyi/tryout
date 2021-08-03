
import Koa from 'koa'
import userName from './constant'
import registerRouter from './router'

const app = new Koa()

app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    await next()
})
  

registerRouter(app)


app.use(async (ctx,next) => {
    ctx.body = userName
    next()
})

app.listen(5959,() => {
    console.log('5959 is on');    
})

export default app