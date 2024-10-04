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

    async postUser(data: User): Promise<User> {
        data.status = true
        const roleExists = await this.prisma.role.findUnique({
            where: {
                idRole: data.idRole,
            }
        });

        if (!roleExists) {
            throw new Error(`El idRole ${data.idRole} no existe`);
        }


        return this.prisma.user.create({
            data
        });
    }

    putUser(idUser: number, data: User): Promise<User> {
        return this.prisma.user.update({
            where: {
                idUser
            },
            data
        })
    }

    deleteUser(idUser: number): Promise<User> {
        return this.prisma.user.delete({
            where: {
                idUser
            }
        })
    }

}