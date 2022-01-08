
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { User, UserService } from './template.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get()
    user(@Query('name') name: string, @Query('age', ParseIntPipe) age: number) {
        //todo age is required
        return this.userService.getUsers(name, age)
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
