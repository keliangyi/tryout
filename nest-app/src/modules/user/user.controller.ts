
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { User, UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get()
    user(@Query('name') name: string, @Query('age',) age: number) {
        //todo age is required
        return this.userService.getUsers()
    }

    @Get(':id')
    getUserById(@Param('id',) id: string) {
        const user = this.userService.getUserById(id)
        return user
    }

    @Post('create')
    createUser(@Body() body: Omit<User, 'id'>) {
        console.log('ddd', body);

        return this.userService.createUser(body)
    }
}
