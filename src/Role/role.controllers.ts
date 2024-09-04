import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RoleService } from "./role.service";
import { Role } from '@prisma/client'

@Controller('Role')
export class RoleController {
    constructor(readonly role: RoleService) { }

    @Get()
    async getAllRole() {
        return this.role.getAllRole()
    }

    @Get()
    async getFindByIdRole(@Param('idRole') idRole: string) {
        return this.role.getFindByIdRole(Number(idRole))
    }

    @Post()
    async postRole(@Body() data: Role) {
        return this.role.postRole(data)
    }

    @Put()
    async putRole(@Param('idRole') idRole: string, data: Role) {
        return this.role.putRole(Number(idRole), data)
    }

    @Delete()
    async deleteRole(@Param('idRole') idRole: string) {
        return this.role.deleteRole(Number(idRole))
    }
}