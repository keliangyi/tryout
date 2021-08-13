
import { ChangeEvent, FC, useCallback, useEffect, useRef, useState,  } from "react"
import { produce } from 'immer'
import { useInterval } from "@/hooks"

const exts = ['audio/mp3','audio/m4a']


const debounce = (fn:Function, ms = 0) => {
    let timeoutId:ReturnType<typeof setTimeout>
    return function(this:unknown, ...args:any[]) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}


interface Istate {
    palyed:number,
    total:number
    isPaly:boolean
    interval:null | number
}

const Audio:FC = () => {

    const audioCtx = useRef(new AudioContext())
    const musicBuffer = useRef<AudioBufferSourceNode>(audioCtx.current.createBufferSource())

    const [ bufferCache, setCache ] = useState<AudioBuffer>()

    const [ time, setTime ] = useState<Istate>({
        palyed:0,
        total:0,
        isPaly:false,
        interval:null
    })

    useInterval(() => {   
        setTime(produce(draft => {
            draft.palyed = draft.palyed + 1
        }))
    },time.interval)

        
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
                        setTime(produce(draft => {
                            draft.total = buffer.duration
                        }))             
                    })
                }               
            }
        }
    }
    

    const handlePlay = (offset = 0) => {
        if(bufferCache && !musicBuffer.current.buffer){
            musicBuffer.current.buffer = bufferCache   
            musicBuffer.current.connect(audioCtx.current.destination)    
            musicBuffer.current.start(0 ,offset ?? time.palyed)  
            console.log(offset, time.palyed);
            
            setTime(produce(draft => {
                draft.isPaly = true
                draft.interval = 1000
            }))
        }    
    }

    const handlePause = () => {
        if(musicBuffer.current.buffer){
            musicBuffer.current.stop()
            musicBuffer.current = audioCtx.current.createBufferSource()
            setTime(produce(draft => {
                draft.isPaly = false
                draft.interval = null
            }))
        }       
    }

    const handleRangeChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        e.persist()
        const val = e.target.valueAsNumber     
               
        setTime(produce(draft => {
            draft.palyed = val
        }))
    },[])
    
    return <div>
        <div>
            <input type="file"  onChange={handleFileChange} accept={exts.join(',')}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
            {
                bufferCache && <input type="range" style={{ width:500 }} onChange={handleRangeChange} min={0} value={time.palyed} max={time.total} />
            }
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
            <button onClick={() => handlePlay()}>播放</button>
            <button onClick={handlePause}>暂停</button>
        </div>
    </div>
}

export default Audio