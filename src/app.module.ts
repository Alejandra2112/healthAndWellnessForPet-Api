import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { PrivilegesModule } from './Privileges/privileges.module';
import { PermissionsModule } from './Permissions/permissions.module';
import { ProductModule } from './Products/products.module';
import { RoleModule } from './Role/role.module';
import { ShippingModule } from './Shipping/shipping.module';
import { AdoptionsModule } from './Adoptions/adoptions.module';
import { PetsModule } from './Pets/pets.module';

@Module({
  imports: [UsersModule, RoleModule, ProductModule, PermissionsModule, PrivilegesModule, ShippingModule, AdoptionsModule, PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

