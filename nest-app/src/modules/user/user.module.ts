import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { DataBaseModule } from 'src/database/db.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        DataBaseModule
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {
    constructor() {

    }
}
