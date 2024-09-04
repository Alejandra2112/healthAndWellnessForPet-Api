import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PermissionsService } from "./permissions.service";
import { Permissions } from '@prisma/client'

@Controller('permissions')

export class PermissionsController {
    constructor(readonly permissions: PermissionsService) { }

    @Get()
    async getAllPermissions() {
        return this.permissions.getAllPermissions();
    }

    @Post()
    async postPermissions(@Body() data: Permissions) {
        return this.permissions.postPermissions(data)
    }

    @Put()
    async putPermissions(@Param('idPermission') idPermission: string, data: Permissions) {
        return this.permissions.putPermissions(Number(idPermission), data)
    }

    @Delete()
    async deletePermissions(@Param('idPermission') idPermission: string) {
        return this.permissions.deletePermissions(Number(idPermission))
    }
}