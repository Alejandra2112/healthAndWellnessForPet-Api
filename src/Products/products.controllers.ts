import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./products.service";
import { Products } from '@prisma/client'

@Controller('product')
export class ProductsController {
    constructor(readonly products: ProductService) { }

    @Get()
    async getAllProduct() {
        return this.products.getAllProduct();
    }

    @Get()
    async getOneProduct(@Param('idProduct') idProduct: string) {
        return this.products.getOneProduct(Number(idProduct));
    }

    @Post()
    async postProduct(@Body() data: Products) {
        return this.products.postProduct(data)
    }

    @Put()
    async putProduct(@Param('idProduct') idProduct: string, @Body() data: Products) {
        return this.products.putProduct(Number(idProduct), data)
    }

    @Delete()
    async deleteProduct(@Param('idProduct') idProduct: string){
        return this.products.deleteProduct(Number(idProduct))
    }


}