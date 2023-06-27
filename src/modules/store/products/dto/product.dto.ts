import { PartialType } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateProductDto extends BaseDto {
    @IsString()
    @IsNotEmpty()
    name_product: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    price_product: number;

    @IsString()
    @IsNotEmpty()
    description_product: string;

    @IsString()
    @IsNotEmpty()
    detailed_description_product: string;

    @IsString()
    @IsNotEmpty()
    images_product: string;

    @IsBoolean()
    @IsNotEmpty()
    status_product: boolean;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    stock_product: number;

    @IsNumber()
    @IsNotEmpty()
    category: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
    @IsOptional()
    name_product: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    price_product: number;

    @IsString()
    @IsOptional()
    description_product: string;

    @IsString()
    @IsOptional()
    detailed_description_product: string;

    @IsString()
    @IsOptional()
    images_product: string;

    @IsBoolean()
    @IsOptional()
    status_product: boolean;

    @IsNumber()
    @IsOptional()
    @IsPositive()
    stock_product: number;

    @IsNumber()
    @IsOptional()
    category: number;
}