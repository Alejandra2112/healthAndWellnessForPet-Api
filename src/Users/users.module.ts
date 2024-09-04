import { Module } from '@nestjs/common';
import { UsersController } from './users.controllers';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [PrismaModule]
})
export class UsersModule { }