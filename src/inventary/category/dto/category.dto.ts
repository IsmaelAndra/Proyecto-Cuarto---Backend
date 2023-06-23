import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CategoryDto {
    @IsString()
    @IsNotEmpty()
    name_category: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateCategoryDto extends PartialType(CategoryDto) {}