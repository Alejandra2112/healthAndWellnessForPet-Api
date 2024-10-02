import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Permissions, Prisma } from "@prisma/client"


@Injectable()
export class PermissionsService {
    constructor(readonly prisma: PrismaService) { }

    async getAllPermissions(): Promise<Permissions[]> {
        return this.prisma.permissions.findMany();
    }

    async postPermissions(data: Permissions): Promise<{ createPermissions: Prisma.BatchPayload; findAllPermissions: Permissions[] }> {
        const createPermissions = await this.prisma.permissions.createMany({ data });

        const findAllPermissions = await this.prisma.permissions.findMany();

        return {
            createPermissions, 
            findAllPermissions
        };

    }


    async putPermissions(idPermissions: number, data: Permissions): Promise<Permissions> {
        return this.prisma.permissions.update({
            where: {
                idPermissions
            }, data
        })
    }

    async deletePermissions(idPermissions: number): Promise<Permissions> {
        return this.prisma.permissions.delete({
            where: {
                idPermissions
            }
        })
    }

}