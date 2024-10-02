import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { UploadApiResponse } from 'cloudinary';


@Injectable()
export class CloudinaryService {
    constructor() {
        cloudinary.config({
            cloudinary_url: process.env.CLOUDINARY_URL
        });
    }

    // Método para subir una imagen
    async uploadImage(file: string, publicId: string): Promise<UploadApiResponse> {
        try {
            const result = await cloudinary.uploader.upload(file, {
                public_id: publicId,
            });
            return result;
        } catch (error) {
            throw new Error(`Error al subir la imagen: ${error.message}`);
        }
    }
}
