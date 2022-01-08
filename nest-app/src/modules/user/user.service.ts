import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose'
// import {  UserDocument } from '.';

export interface User { id: string, name: string, age: number }

@Injectable()
export class UserService {

    private users: User[] = [
        { id: '001', name: "maomao", age: 22 },
        { id: '002', name: "admin", age: 50 },
    ]
    constructor(
        @InjectModel("User") private readonly UserModel: Model<any>
    ) {
        // console.log(this.UserModel)
    }

    genUUid() {
        return Date.now().toString(16)
    }

    getUsers(name?: string, age?: number): Promise<Array<User>> {
        return this.UserModel.find().exec()
    }

    getUserById(uid: string): User {
        const usr = this.users.find(f => f.id === uid)
        if (!usr) {
            throw new NotFoundException('用户不存在',)
        }
        return usr
    }

    createUser(n: object) {
        const newUser = new this.UserModel(n)
        return newUser.save()
    }


}
