import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { Pets } from "@prisma/client";

@Controller('pets')
export class PetsController {
    constructor(readonly pets: PetsService) { }

    @Get()
    async getAllPets() {
        return await this.pets.getAllPets();
    }

    @Get(':idPets')
    async getFindIdByPets(@Param('idPets') idPets: string) {
        return await this.pets.getFindIdByPets(Number(idPets))
    }

    @Post()
    async postPets(@Body() data: Pets) {
        return await this.pets.postPets(data)
    }

    @Put(':idPets')
    async putPets(@Param('idPets') idPets: string, @Body() data: Pets) {
        return await this.pets.putPets(Number(idPets), data)
    }

    @Delete(':idPets')
    async deletePets(@Param('idPets') idPets: string) {
        return await this.pets.deletePets(Number(idPets))
    }
}