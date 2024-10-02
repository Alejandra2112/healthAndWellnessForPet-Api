import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ShippingController } from "./shipping.controllers";
import { ShippingService } from "./shipping.service";

@Module({
    controllers: [ShippingController],
    providers: [ShippingService],
    imports:[PrismaModule]
})
export class ShippingModule {}