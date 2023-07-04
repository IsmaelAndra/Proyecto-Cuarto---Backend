import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateEventDto extends BaseDto {
    @IsString()
    @IsNotEmpty()
    title_history: string;

    @IsString()
    @IsNotEmpty()
    images_history: string;

    @IsString()
    @IsNotEmpty()
    description_history: string;
}

export class UpdateEventDto extends PartialType(CreateEventDto) {
    @IsString()
    @IsOptional()
    title_history: string;

    @IsString()
    @IsOptional()
    images_history: string;

    @IsString()
    @IsOptional()
    description_history: string;
}