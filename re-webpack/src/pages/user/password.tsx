import { FC, useState } from 'react';

const Password:FC = () => {
    const [ state ] = useState(0)
    const tt = `
    ${state}    
    《雪山飞狐》与《飞狐外传》虽有关连，然而是两部各自独立的小说，所以内容并不强求一致。
    `
    return <h1>{tt}</h1>
}

export default Password