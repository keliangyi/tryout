import { ChangeEvent, FC, useRef, useState,  } from "react"

const exts = ['audio/mp3','audio/m4a']

const Audio:FC = () => {

    const audioCtx = useRef(new AudioContext())
    const musicBuffer = useRef<AudioBufferSourceNode>(audioCtx.current.createBufferSource())

    const [ cacheBuffer, setCache ] = useState<AudioBuffer>()

    const [ state, setState ] = useState({
        time:0
    })
    
    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(files && files.length > 0){
            const file = files[0]
            const fileRender = new FileReader()
            fileRender.readAsArrayBuffer(file)
            fileRender.onload = (event: ProgressEvent<FileReader>) => {
                if(event.target?.result){                   
                    
                    audioCtx.current.decodeAudioData(event.target.result as ArrayBuffer, (buffer:AudioBuffer) => {                         
                        setCache(buffer)                  
                    })
                }               
            }
        }
    }

    const HandlePlay = () => {
        if(cacheBuffer){
            let cut = 50
            if(!musicBuffer.current.buffer){
                musicBuffer.current.buffer = cacheBuffer   
                musicBuffer.current.connect(audioCtx.current.destination)  
                cut = 0
            }            
            musicBuffer.current.start(cut)
        }    
    }
    const HandlePause = () => {
        musicBuffer.current.stop()
    }
    
    return <div>
        <input type="file" onChange={handleFileChange} accept={exts.join(',')}/>
        <button onClick={HandlePlay}>播放</button>
        <button onClick={HandlePause}>暂停</button>
    </div>
}

export default Audio