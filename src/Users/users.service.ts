import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany()
    }

    getFindById(idUser: number): Promise<User> {
        return this.prisma.user.findUnique({
            where: {
                idUser
            }
        })
    }

    postUser(data: User): Promise <User>{
        return this.prisma.user.create({
            data
        })
    }

    putUser(idUser: number, data: User): Promise <User>{
        return this.prisma.user.update({
            where: {
                idUser
            }, 
            data
        })
    }

    deleteUser(idUser: number): Promise<User>{
        return this.prisma.user.delete({
            where: {
                idUser
            }
        })
    }

}