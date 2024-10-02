import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RolePermissions } from "@prisma/client";

@Injectable()
export class RolePermissionsService {
    constructor(readonly prisma: PrismaService) { }

    async getAllRolePermissions(): Promise<RolePermissions[]> {
        return this.prisma.rolePermissions.findMany()

    }

    async postRolePermissions(data: RolePermissions): Promise<RolePermissions> {
        return this.prisma.rolePermissions.create({ data })

    }
}