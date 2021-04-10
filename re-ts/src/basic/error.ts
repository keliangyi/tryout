

const ajax = () => {
    return new Promise((resolve,reject) => {
        const n = Math.random()
        if(n > 0.5){
            resolve(n)
        }else{
            reject('Error, number is：' + n, )
        }
    })
}

const catchErr = async () => {
    const n = await ajax().catch((err) => {
        console.error(err)  
    })
    console.log(n); // reject => undefined
    
    // try {
    //     const n = await ajax()
    //     console.log(n)        
    // } catch (error) {
    //     console.error(error)        
    // }
}

catchErr()