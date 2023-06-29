import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateHistoryDto extends BaseDto {
    @IsString()
    @IsNotEmpty()
    title_history: string;

    @IsString()
    @IsNotEmpty()
    description_history: string;
}

export class UpdateHistoryDto extends PartialType(CreateHistoryDto){
    @IsString()
    @IsOptional()
    title_history: string;

    @IsString()
    @IsOptional()
    description_history: string;
}