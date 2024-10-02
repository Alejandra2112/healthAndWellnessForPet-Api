import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ShippingService } from "./shipping.service";
import { Shipping } from "@prisma/client";

@Controller('shipping')
export class ShippingController {

    constructor(readonly shipping: ShippingService) { }

    @Get()
    async getAllShipping() {
        return await this.shipping.getAllShipping()
    }

    @Get()
    async getFindById(@Param('idShipping') idShipping: string) {
        return this.shipping.getFindById(Number(idShipping))
    }

    @Post()
    async postShipping(@Body() data: Shipping) {
        return this.shipping.postShipping(data)
    }

    @Put()
    async putShipping(@Param('idShipping') idShipping: string, @Body() data: Shipping) {
        return this.shipping.putShipping(Number(idShipping), data)
    }

    @Delete()
    async deleteShipping(@Param('idShipping') idShipping: string) {
        return this.shipping.deleteShipping(Number(idShipping))
    }
}