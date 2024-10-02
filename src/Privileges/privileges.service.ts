import { Injectable } from "@nestjs/common";
import { Prisma, Privileges } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PrivilegesService {

    constructor(private readonly prisma: PrismaService) { }

    async getAllPrivileges(): Promise<Privileges[]> {
        return await this.prisma.privileges.findMany()
    }

    async postPrivileges(data: Privileges): Promise<{ createManyPrivileges: Prisma.BatchPayload, findAllPrivileges: Privileges[] }> {
        const createManyPrivileges = await this.prisma.privileges.createMany({ data })

        const findAllPrivileges = await this.prisma.privileges.findMany()

        return {
            createManyPrivileges,
            findAllPrivileges
        }
    }

    async putPrivileges(idPrivileges: number, data: Privileges): Promise<Privileges> {
        return await this.prisma.privileges.update({
            where: {
                idPrivileges
            },
            data
        })
    }

    async deletePrivileges(idPrivileges: number): Promise<Privileges> {
        return await this.prisma.privileges.delete({
            where: {
                idPrivileges
            }
        })
    }

}