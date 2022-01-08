import { Module } from '@nestjs/common';
import { UserController } from './project.controller';
import { UserService } from './project.service';

@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule { }
