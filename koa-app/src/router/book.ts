import Router from '@koa/router'

const book = new Router({
    prefix:'/book'
})

book.get('/', async (ctx) => {
    

    ctx.body = 'book index'
})
book.get('/detail', async (ctx) => {
    

    ctx.body = 'book detail'
})

export default book