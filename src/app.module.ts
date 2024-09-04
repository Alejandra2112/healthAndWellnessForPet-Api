import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { PrivilegesModule } from './Privileges/privileges.module';
import { PermissionsModule } from './Permissions/permissions.module';
import { ProductModule } from './Products/products.module';
import { RoleModule } from './Role/role.module';

@Module({
  imports: [UsersModule, RoleModule, ProductModule,PermissionsModule, PrivilegesModule ],
  controllers: [],
  providers: [],
})
export class AppModule { }

