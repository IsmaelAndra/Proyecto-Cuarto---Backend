import { PartialType } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name_product: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    detailedDescription: string;

    @IsString()
    @IsNotEmpty()
    images: string;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    stock: number;

    @IsNumber()
    @IsNotEmpty()
    category: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}