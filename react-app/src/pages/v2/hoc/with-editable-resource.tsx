import axios from 'axios';
import React, { useEffect, useState } from 'react';



const BASE_URL = 'https://random-data-api.com'
function WithEditableResource<T extends string , P extends { [k in T]?: P[T]},>(Component:React.ComponentType<P>,resourcePath:string,resourceName:string):React.ComponentType<P>{

    return function Hoc(props:P)  { // Hoc名称是必要的 react-hooks/exhaustive-deps
        // const [ original,setOriginal ] = useState< P[T] | null>(null)
        const [ data,setData ] = useState<P[T] | null>(null)

        useEffect(() => {
            (async() => {
                const res = await axios(BASE_URL + resourcePath,)                
                setData(res.data)
                // setOriginal(res.data)
            })()
        },[])

        const onChange= (changes:any) => {
            setData({ ...data, ...changes })
        }


        props = Object.assign({},props,{ [resourceName]:data, [`onChange${resourceName}`]:onChange })

        return <Component { ...props } />
    }
}

export default WithEditableResource