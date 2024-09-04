import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PrivilegesService } from "./privileges.service";
import { Privileges } from '@prisma/client'

@Controller('privileges')
export class PrivilegesController {
    constructor(readonly privilegeService: PrivilegesService) { }

    @Get()
    async getAllPrivileges() {
        return this.privilegeService.getAllPrivileges();
    }

    @Post()
    async postPrivileges(@Body() data: Privileges) {
        return this.privilegeService.postPrivileges(data)
    }

    @Put()
    async putPrivileges(@Param('idPrivilege') idPrivilege: string, @Body() data: Privileges) {
        return this.privilegeService.putPrivileges(Number(idPrivilege), data)
    }

    @Delete()
    async deletePrivileges(@Param('idPrivilege') idPrivilege: string) {
        return this.privilegeService.deletePrivileges(Number(idPrivilege))
    }

}