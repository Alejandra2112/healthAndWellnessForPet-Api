import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductsController } from "./products.controllers";
import { ProductService } from "./products.service";


@Module({
    controllers: [ProductsController],
    providers: [ProductService],
    imports: [PrismaModule],
})

export class ProductModule { }