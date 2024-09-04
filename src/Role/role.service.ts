import { Injectable } from "@nestjs/common";
import { Role } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class RoleService {
    constructor(readonly prisma: PrismaService) { }

    async getAllRole(): Promise<Role[]> {
        return this.prisma.role.findMany();
    }

    async getFindByIdRole(idRole: number): Promise<Role> {
        return this.prisma.role.findUnique({
            where: {
                idRole
            }
        })
    }

    async postRole(data: Role): Promise<Role> {
        return this.prisma.role.create({ data })
    }

    async putRole(idRole: number, data: Role): Promise<Role> {
        return this.prisma.role.update({
            where: {
                idRole
            }, data
        })
    }

    async deleteRole(idRole: number): Promise<Role> {
        return this.prisma.role.delete(
            {
                where: {
                    idRole
                }
            }
        )
    }
}