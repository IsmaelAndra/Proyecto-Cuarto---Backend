import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto, CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    async findAllUsers(){
        return await this.userService.findAll();
    }

    @Get(':id_user')
    async findOneUser(@Param('id_user') id_user: number){
        return await this.userService.findOne(id_user);
    }

    @Post()
    async createUser(@Body() newUserDto: CreateUserDto){
        return await this.userService.create(newUserDto);
    }

    @Patch(':id_user')
    async updateUser(@Param('id_user') id_user: number, @Body() updateUserDto: UpdateUserDto){
        return await this.userService.update(id_user, updateUserDto);
    }

    @Delete(':id_user')
    async removeUser(@Param('id_user') id_user: number){
        return await this.userService.remove(id_user);
    }
}
