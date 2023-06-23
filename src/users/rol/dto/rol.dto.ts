import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RolDto {
    @IsString()
    @IsNotEmpty()
    name_rol: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateRolDto extends PartialType(RolDto){}