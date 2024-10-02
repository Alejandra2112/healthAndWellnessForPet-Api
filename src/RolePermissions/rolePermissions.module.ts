import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { RolePermissionsController } from "./rolePermissions.controller";
import { RolePermissionsService } from "./rolePermissions.service";

@Module({
    controllers:[RolePermissionsController],
    providers:[RolePermissionsService],
    imports: [PrismaModule],
    exports: [RolePermissionsService]
})

export class RolePermissionsModule {}