import { IsDate, IsOptional } from "class-validator";

export class BaseDto {
    @IsDate()
    @IsOptional()
    createAt: Date;

    @IsDate()
    @IsOptional()
    updateAt: Date;
}