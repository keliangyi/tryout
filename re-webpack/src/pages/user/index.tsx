import { FC, useState } from 'react';

const User:FC = () => {
    const [ state ] = useState(0)
    return <h1>User：{state}</h1>
}

export default User