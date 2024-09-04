    import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import {User} from '@prisma/client'


@Controller('users')
export class UsersController{
    constructor (private readonly userservice: UsersService) {}

    @Get()
    async getAllUsers(){
        return this.userservice.getAllUsers();
    }

    @Get(':idUser')
    async getFindUserById(@Param('idUser')idUser: string){
        return this.userservice.getFindById(Number(idUser))
    }

    @Post()
    async postUser(@Body() data: User){
        return this.userservice.postUser(data)
    }

    @Put(':idUser')
    async putUsers(@Param('idUser') idUser: string, @Body() data: User){
        return this.userservice.putUser(Number(idUser), data)
    }

    @Delete(':idUser')
    async deleteFindUserById(@Param('idUser')idUser: string){
        return this.userservice.deleteUser(Number(idUser))
    }
}