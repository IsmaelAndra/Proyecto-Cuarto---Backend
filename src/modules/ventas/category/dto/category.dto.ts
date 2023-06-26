import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateCategoryDto extends BaseDto {
    @IsString()
    @IsNotEmpty()
    name_category: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description_category: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsString()
    @IsOptional()
    name_category: string;
}