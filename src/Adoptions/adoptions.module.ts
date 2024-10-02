import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AdoptionsController } from "./adoptions.controllers";
import { AdoptionsService } from "./adoptions.service";

@Module({
    controllers: [AdoptionsController],
    providers: [AdoptionsService],
    imports:[PrismaModule]
})

export class AdoptionsModule {}