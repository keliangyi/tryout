import fs from 'fs/promises'
import walk from '../lib/walk'



const move = async () => {
    const target = 'H:\dy'
    // const { files, directorys } = await walk(target)
    // console.log( files, directorys );

    const axin = 'H:dy\\迅雷下载\\dda.txt'
    
    const res = await fs.copyFile(axin,'H:dy',)
    console.log(res);
    
}

move()