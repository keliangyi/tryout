import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schemas';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    exports: [
        MongooseModule
    ]

})
export class DataBaseModule {
    constructor() {
        console.log(11, User.name);

    }
}
