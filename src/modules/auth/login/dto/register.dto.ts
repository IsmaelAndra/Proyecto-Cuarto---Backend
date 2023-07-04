import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterDto {
    @IsString()
    @IsOptional()
    photo_user: string;

    @IsString()
    @IsNotEmpty()
    name_user: string;

    @IsString()
    @IsNotEmpty()
    lastname_user: string;

    @IsEmail()
    @IsNotEmpty()
    mail_user: string;

    @IsString()
    @IsNotEmpty()
    address_user: string;

    @IsString()
    @IsNotEmpty()
    phone_user: string;

    @IsDate()
    @IsNotEmpty()
    date_of_birth_user: Date;

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