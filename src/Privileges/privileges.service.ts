import { Injectable } from "@nestjs/common";
import { Privileges } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PrivilegesService {

    constructor(private readonly prisma: PrismaService) { }

    async getAllPrivileges(): Promise<Privileges[]> {
        return this.prisma.privileges.findMany()
    }

    postPrivileges(data: Privileges): Promise<Privileges> {
        return this.prisma.privileges.create({
            data
        })
    }

    putPrivileges(idPrivileges: number, data: Privileges): Promise<Privileges> {
        return this.prisma.privileges.update({
            where: {
                idPrivileges
            },
            data
        })
    }

    deletePrivileges(idPrivileges: number): Promise<Privileges> {
        return this.prisma.privileges.delete({
            where: {
                idPrivileges
            }
        })
    }

}