import fs from 'fs'

const registerRouter = (app:any) => {
    const dirs = fs.readdirSync(__dirname)
    for(let fileName of dirs){
        if(fileName.endsWith('.ts')){
            const module = fileName.substring(0,fileName.length - 3)                      
            let route = require('./'+ module).default
            if(route.routes){
                app.use(route.routes()).use(route.allowedMethods())
            }   
        }
    }    
}

export default registerRouter