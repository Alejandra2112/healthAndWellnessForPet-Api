import { Injectable } from "@nestjs/common";
import { Shipping } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ShippingService {
    constructor(readonly prisma: PrismaService) { }

    async getAllShipping(): Promise<Shipping[]> {
        return this.prisma.shipping.findMany()
    }

    async getFindById(idShipping: number): Promise<Shipping> {
        return this.prisma.shipping.findUnique({
            where: {
                idShipping
            }
        })
    }

    async postShipping(data: Shipping): Promise<Shipping> {
        return this.prisma.shipping.create({ data })
    }

    async putShipping(idShipping: number, data: Shipping): Promise<Shipping> {
        return this.prisma.shipping.update({
            where: {
                idShipping
            },
            data
        })
    }

    deleteShipping(idShipping: number): Promise<Shipping> {
        return this.prisma.shipping.delete({
            where: {
                idShipping
            }
        })
    }
}