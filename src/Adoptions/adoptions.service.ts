import { Injectable } from "@nestjs/common";
import { Adoptions } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AdoptionsService {
    constructor(readonly prisma: PrismaService) { }

    async getAllAdoptions(): Promise<Adoptions[]> {
        return await this.prisma.adoptions.findMany()
    }

    async getFindById(idAdoption: number) {
        return await this.prisma.adoptions.findUnique({
            where: {
                idAdoption
            }
        })
    }

    async postAdoptions(data: Adoptions): Promise<Adoptions> {
        return await this.prisma.adoptions.create(
            {
                data
            }
        )
    }

    async putAdoptions(idAdoption: number, data: Adoptions): Promise<Adoptions> {
        return await this.prisma.adoptions.update({
            where: {
                idAdoption
            }, data
        })
    }

    async deleteAdoption(idAdoption: number): Promise<Adoptions> {
        return await this.prisma.adoptions.delete({
            where: {
                idAdoption
            }
        })
    }
}