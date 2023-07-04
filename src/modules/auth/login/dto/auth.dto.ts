import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { AuthBody } from "../interface/login.interface";

export class UserAuthDto implements AuthBody {
    @IsNotEmpty()
    @IsEmail()
    mail_user: string;

    @IsNotEmpty()
    @IsString()
    password_user: string;
}