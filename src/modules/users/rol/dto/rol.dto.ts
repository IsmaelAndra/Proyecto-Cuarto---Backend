import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateRolDto extends BaseDto {
    @IsString()
    @IsNotEmpty()
    name_rol: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description_rol: string;
}

export class UpdateRolDto extends PartialType(CreateRolDto){
    @IsString()
    @IsOptional()
    name_rol: string;
}