import { FC, useEffect } from 'react';
import io from 'socket.io-client'

const socket = io('/?token=01')

const Socket:FC = () => {

    useEffect(() => {
       
        socket.on('connect', () => {
            console.log('连接成功');
        })

        // socket.emit('msg','你好服务器');
   
        socket.on('msg',(data)=>{
        
            console.log(data);
        })

    },[])

    const handleSend = () => {
        const n = Math.random()
        console.log(n);
        
        socket.emit('msg',n);
    }
    
    return <div>
        connect
        <div></div>
        <button onClick={handleSend}>
            send msg
        </button>
    </div>
}

export default Socket