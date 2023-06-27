import { PartialType } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateUserDto extends BaseDto {
    @IsString()
    @IsOptional()
    photo_user: string;

    @IsString()
    @IsNotEmpty()
    name_user: string;

    @IsString()
    @IsNotEmpty()
    lastname_user: string;

    @IsString()
    @IsNotEmpty()
    mail_user: string;

    @IsString()
    @IsNotEmpty()
    address_user: string;

    @IsString()
    @IsNotEmpty()
    phone_user: string;

    @IsString()
    @IsNotEmpty()
    date_of_birth_user: string;

    @IsString()
    @IsNotEmpty()
    password_user: string;

    @IsString()
    @IsNotEmpty()
    password_validation_user: string;

    @IsBoolean()
    @IsNotEmpty()
    status_user: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    photo_user: string;

    @IsString()
    @IsOptional()
    name_user: string;

    @IsString()
    @IsOptional()
    lastname_user: string;

    @IsString()
    @IsOptional()
    mail_user: string;

    @IsString()
    @IsOptional()
    address_user: string;

    @IsString()
    @IsOptional()
    phone_user: string;

    @IsString()
    @IsOptional()
    date_of_birth_user: string;

    @IsString()
    @IsOptional()
    password_user: string;

    @IsString()
    @IsOptional()
    password_validation_user: string;

    @IsBoolean()
    @IsOptional()
    status_user: boolean;
}