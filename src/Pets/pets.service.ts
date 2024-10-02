import { Injectable } from "@nestjs/common";
import { Pets } from "@prisma/client";
import { CloudinaryService } from "src/Cloudinary/cloudinary.service";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class PetsService {
    constructor(readonly prisma: PrismaService, private readonly cloudinaryService: CloudinaryService) { }

    async getAllPets(): Promise<Pets[]> {
        return this.prisma.pets.findMany()
    }

    async getFindIdByPets(idPets: number): Promise<Pets> {
        return this.prisma.pets.findUnique({
            where: {
                idPets
            }
        })
    }
    

    async postPets(data: Pets): Promise<Pets> {

        if (data.image) {
            // Subir la imagen a Cloudinary sin importar si es una URL o base64
            const uploadResult = await this.cloudinaryService.uploadImage(data.image, `pets/${data.namePet}`);

            data.image = uploadResult.secure_url;
        }

        return this.prisma.pets.create({ data });
    }


    async putPets(idPets: number, data: Pets): Promise<Pets> {
        if (data.image) {
            // Subir la nueva imagen a Cloudinary
            const uploadResult = await this.cloudinaryService.uploadImage(data.image, `pets/${data.namePet}`);

            data.image = uploadResult.secure_url;
        }

        return await this.prisma.pets.update({
            where: {
                idPets
            },
            data
        })
    }

    async deletePets(idPets: number): Promise<Pets> {
        return this.prisma.pets.delete({
            where: {
                idPets
            }
        })
    }
}