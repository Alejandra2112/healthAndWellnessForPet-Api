import { Controller } from "@nestjs/common";
import { RolePermissionsService } from "./rolePermissions.service";

@Controller('rolepermissions')
export class RolePermissionsController {
    constructor(readonly rolepermissions: RolePermissionsService) { }

    async getAllRolePermission() {
        return this.rolepermissions.getAllRolePermissions()
    }
}