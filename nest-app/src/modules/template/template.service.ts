import { Injectable, NotFoundException } from '@nestjs/common';


export interface User {
    name: string,
    id: string
    age: number
}

@Injectable()
export class UserService {
    private users: User[] = [
        { id: '001', name: "maomao", age: 22 },
        { id: '002', name: "admin", age: 50 },
    ]

    genUUid() {
        return Date.now().toString(16)
    }

    getUsers(name?: string, age?: number): Array<User> {
        return this.users.filter(f => {
            let res = true
            if (name && age) {
                res = f.name.includes(name) || f.age === age
            }
            if (name) {
                res = f.name.includes(name)
            }
            if (age) {
                res = f.age === age
            }
            return res
        })
    }

    getUserById(uid: string): User {
        const usr = this.users.find(f => f.id === uid)
        if (!usr) {
            throw new NotFoundException('用户不存在',)
        }
        return usr
    }

    createUser(name: string, age: number) {
        const newUser = { name, age, id: this.genUUid() }
        this.users.push(newUser)
        return newUser
    }


}
