
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { User, UserService } from './project.service';

@Controller('userapp')
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get()
    app_list() {
        //todo age is required
        return {
            code: 0,
            data: []
        }
    }

    @Get(':id')
    getUserById(@Param('id',) id: string) {
        const user = this.userService.getUserById(id)
        return user
    }

    @Post('create')
    createUser(@Body() body: Omit<User, 'id'>) {
        console.log('ddd');

        return this.userService.createUser(body.name, body.age)
    }
}
