import { Module } from "@nestjs/common";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controllers";
import { PrismaModule } from "src/prisma/prisma.module";
import { RolePermissionsModule } from "src/RolePermissions/rolePermissions.module";
import { PermissionsModule } from "src/Permissions/permissions.module";
import { PrivilegesModule } from "src/Privileges/privileges.module";

@Module({
    controllers: [RoleController],
    providers: [RoleService],
    imports: [PrismaModule, RolePermissionsModule, PermissionsModule, PrivilegesModule]
})

export class RoleModule { }