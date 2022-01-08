import { Module } from '@nestjs/common';
import { UserController } from './template.controller';
import { UserService } from './template.service';

@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule { }
