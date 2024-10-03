import { Injectable } from "@nestjs/common";
import { Role } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { RolePermissionsService } from "src/RolePermissions/rolePermissions.service";



@Injectable()
export class RoleService {
    constructor(readonly prisma: PrismaService, readonly rolePermissions: RolePermissionsService) { }

    async getAllRole(): Promise<Role[]> {
        const roles = await this.prisma.role.findMany({
            include: {
                rolePermissions: true
            },
        });
        return roles;
    }

    async getFindByIdRole(idRole: number): Promise<Role> {
        return this.prisma.role.findUnique({
            where: {
                idRole
            },
            include: {
                rolePermissions: true
            }
        })
    }

    async postRole(data: any): Promise<Role> {
        const newRole = await this.prisma.role.create({
            data: {
                nameRole: data.nameRole,
                status: true
            },
        });

        if (data.detailsRols && data.detailsRols.length > 0) {
            for (const detail of data.detailsRols) {

                const permission = await this.prisma.permissions.findFirst({
                    where: { namePermission: detail.permission },
                });

                const privilege = await this.prisma.privileges.findFirst({
                    where: { namePrivileges: detail.privilege },
                });

                if (permission && privilege) {
                    await this.rolePermissions.postRolePermissions({
                        idRole: newRole.idRole,
                        idPermissions: permission.idPermissions,
                        idPrivileges: privilege.idPrivileges,
                    });
                } else {

                    throw new Error(`Permiso o privilegio no encontrado: ${detail.permission} / ${detail.privilege}`);
                }
            }
        }

        return this.prisma.role.findUnique({
            where: { idRole: newRole.idRole },
            include: { rolePermissions: true },
        });
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