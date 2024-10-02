import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PetsController } from "./pets.controllers";
import { PetsService } from "./pets.service";
import { CloudinaryModule } from "src/Cloudinary/cloudinary.module";

@Module({
    controllers:[PetsController],
    providers: [PetsService],
    imports: [PrismaModule, CloudinaryModule]
})
export class PetsModule {}
