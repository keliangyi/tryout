import { FC, useCallback, useState, memo } from "react"
/**
 * 当一个函数需要向子组件传递且函数内部会造成render时用useCallback, 
 * 
 * deps = [ state ] 当setState中没有用函数的方式修改时需要
 * 
 * 如果将函数传递给子组件，即使子组件用了memo 父组件变化时，子组件也会rerender 所以才需要 useCallback 来记住里面的函数
 * 
 * useMemo  === useCallback(fn,[deps])
 */

const Parent:FC = () => {
    const [ count, setCount ] = useState(0)
    const [ val, setVal ] = useState('')

    const handleClick = useCallback(() => {
        setCount(count + 1) // 闭包count, 需要deps=[count]
        // setCount(c => { // 这种情况下 c 是最新的count，deps=[]
        //     return c + 1
        // })
    },[count])

    const handleChange = useCallback((v:string) => {
        setVal(() => v)
        console.log(v);
        
    },[])
    
    return <div style={{ width:"100vw" }}>
        <h1>{ count }</h1>
        <button onClick={handleClick}>parentd click</button>
        <hr />
        <Child onChange={handleChange}/>
    </div>
}


const Child:FC<{ onChange:(v:string) => void }> = memo( ({ onChange }) => {
    console.info('Child render');    
    return <div>
        <button onClick={() => onChange(Math.random().toFixed(5))}>child click</button>
    </div>
})

export default memo(Parent)