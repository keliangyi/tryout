
import Koa from 'koa'

const app = new Koa()


app.use(async(ctx) => {
    ctx.body = 'Hello World !';
})

app.listen(5959,() => {
    console.log('5959 is on');    
})

export default app