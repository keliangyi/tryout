import fs from 'fs/promises'
import { join } from 'path'


interface IResult {
    files:string[]
    directorys:string[]
}

const fsWalk = async(top:string):Promise<IResult> => {
    const files:IResult['files'] = []
    const directorys:IResult['directorys'] = []
    const walk = async (pathName:string) => {
        const dir = await fs.readdir(pathName,{
            withFileTypes:true
        })
        for(let i of dir){
            const path = join(pathName,i.name)            
            if(i.isFile()){
                files.push(path)    
            }
            if(i.isDirectory()){
                directorys.push(path)
                await walk(path)    
            }
        }  
    }
   await walk(top)     
   return { files, directorys }
}

export default fsWalk