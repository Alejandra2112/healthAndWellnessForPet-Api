import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Permissions } from "@prisma/client"


@Injectable()
export class PermissionsService {
    constructor(readonly prisma: PrismaService) { }

    async getAllPermissions(): Promise<Permissions[]> {
        return this.prisma.permissions.findMany();
    }

    async postPermissions(data: Permissions): Promise<Permissions> {
        return this.prisma.permissions.create({ data })
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