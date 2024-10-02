import { Module } from "@nestjs/common";
import { PermissionsController } from "./permissions.controllers";
import { PermissionsService } from "./permissions.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [PermissionsController],
    providers: [PermissionsService],
    imports: [PrismaModule],
    exports: [PermissionsService]
})

export class PermissionsModule { }