import { Module } from "@nestjs/common";
import { PrivilegesController } from "./privileges.controllers";
import { PrivilegesService } from "./privileges.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [PrivilegesController],
    providers: [PrivilegesService],
    imports: [PrismaModule],
    exports: [PrivilegesService]
})
export class PrivilegesModule { }