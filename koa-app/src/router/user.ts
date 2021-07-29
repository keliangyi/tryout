import Router from '@koa/router'

const user = new Router({
    prefix:'/user'
})

user.get('/:id', async (ctx) => {
    const { params, query } = ctx
    ctx.body = { params, query }
})

export default user