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
        const userExists = await this.prisma.user.findUnique({
            where: {
                idUser: data.idUser,
            }
        });

        const petExits = await this.prisma.pets.findUnique({
            where: {
                idPets: data.idPets
            }
        })

        if (!userExists && petExits) {
            throw new Error(`El idPet ${data.idPets} o el idUser ${data.idUser} no existe`);
        }

        const changeStatusPet = await this.prisma.pets.update({
            where: {
                idPets: data.idPets
            },
            data: {
                status: 'No Disponible'
            }
        })


        return await this.prisma.adoptions.create(
            {
                data: {
                    idPets: data.idPets,
                    idUser: data.idUser,
                    monitoringStatus: 'Pendiente',
                    status: 'Adoptado'
                }
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