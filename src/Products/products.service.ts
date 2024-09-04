import { Injectable, Param } from "@nestjs/common";
import { Products } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'


@Injectable()
export class ProductService {
    constructor(readonly prisma: PrismaService) { }

    async getAllProduct(): Promise<Products[]> {
        return this.prisma.products.findMany();
    }

    async getOneProduct(idProduct: number): Promise<Products> {
        return this.prisma.products.findUnique({
            where: {
                idProduct
            }
        })
    }

    async postProduct(data: Products): Promise<Products> {
        return this.prisma.products.create({
            data
        })
    }

    async putProduct(idProduct: number, data: Products): Promise<Products> {
        return this.prisma.products.update({
            where: {
                idProduct
            }, data
        })
    }

    async deleteProduct(idProduct: number): Promise<Products> {
        return this.prisma.products.delete({
            where: {
                idProduct
            }
        })
    }
}
