import { PartialType } from "@nestjs/swagger";

export class CreateProductDto {
    id_product: number;
    name_product: string;
    price: number;
    description: string;
    detailedDescription: string;
    images: string;
    status: boolean;
    stock: number;
    category: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}