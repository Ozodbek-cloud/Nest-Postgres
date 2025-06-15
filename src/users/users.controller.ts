import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from 'src/models/user.model';
import { UserDto } from './dto/users.dto';

@Controller('users')

export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post("create")
    createUser(@Body() payload: Required<UserDto>) {
        return this.userService.create_user(payload)
    }
    
    @Get('v1/users')
    getAll() {
        return this.userService.findallusers()
    }
}
