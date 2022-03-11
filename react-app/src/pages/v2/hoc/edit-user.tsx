import { FC } from 'react';


export interface UserProps {
    user?:{
        first_name: string
        last_name: string
        password: string
        username: string
    }
}

const EditUser:FC<UserProps> = ({ user }) => {
    

    return user ? <div>
        <label>
            <span>
            first_name:
            </span>
            <input value={user.first_name}/>
        </label>
        <label>
            <span>
            last_name:
            </span>
            <input value={user.last_name}/>
        </label>
        <label>
            <span>
            username:
            </span>
            <input value={user.username}/>
        </label>
        <label>
            <span>
            password:
            </span>
            <input value={user.password}/>
        </label>
    </div> : <span>...</span>
}

export default EditUser