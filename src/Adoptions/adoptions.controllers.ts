import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AdoptionsService } from "./adoptions.service";
import { Adoptions } from "@prisma/client";

@Controller('adoptions')
export class AdoptionsController {
    constructor(readonly adoption: AdoptionsService) { }

    @Get()
    async getAllAdoptions() {
        return this.adoption.getAllAdoptions()
    }

    @Get()
    async getFindById(@Param('idAdoption') idAdoption: string) {
        return this.adoption.getFindById(Number(idAdoption))

    }

    @Post()
    async postAdoptions(@Body() data: Adoptions) {
        return this.adoption.postAdoptions(data)
    }

    @Put()
    async putAdoption(@Param('idAdoption') idAdoption: string, data: Adoptions) {
        return this.adoption.putAdoptions(Number(idAdoption), data)
    }

    @Delete()
    async deleteAdoption(@Param('idAdoption') idAdoption: string) {
        return this.adoption.deleteAdoption(Number(idAdoption))
    }
}