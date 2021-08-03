import Router from '@koa/router'
import { join } from 'path'
import http from 'http'
import { exec, spawn } from 'child_process'

const book = new Router({
    prefix:'/book'
})


const runPy = (path:string, args?:string[]):Promise<any> => {
    return new Promise((resolve,reject) => {
        const workerProcess = spawn('python',[path, ...args ?? []],)
        workerProcess.stdout.on('data', function (data) {
            if(data){
                resolve(data.toString())
            }
        });
    })
}

const httpGet = (url:string):Promise<any> => {
    return new Promise((resolve,reject) => {
        http.get(url,res => {
            res.on('data', (chunk) => { 
                resolve(JSON.parse(chunk.toString()))
            })            
        })
    })
}

book.get('/', async (ctx,next) => {
    const args = ['hello', 'nodejs&python']
    
    const path = join(__dirname,'./node.py') 
   
    const py = await runPy(path,args)
    const res = await httpGet('http://192.168.1.250:8558/api/home/login?userName=15000000000&password=admin')
   
    
    ctx.body = {
        py, res
    }
    // next()
})

book.get('/detail', async (ctx) => {
    

    ctx.body = 'book detail'
})

export default book