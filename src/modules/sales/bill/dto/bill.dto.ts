import { PartialType } from "@nestjs/swagger";
import { IsDate, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateBillDto extends BaseDto {
    @IsDate()
    @IsNotEmpty()
    date_bill: Date;

    @IsString()
    @IsNotEmpty()
    payment_method_bill: string;

    @IsNumber()
    @IsNotEmpty()
    subtotal_bill: number;

    @IsNumber()
    @IsNotEmpty()
    iva_bill: number;

    @IsNumber()
    @IsNotEmpty()
    total_bill: number;
}

export class UpdateBillDto extends PartialType(CreateBillDto){
    @IsDate()
    @IsOptional()
    date_bill: Date;

    @IsString()
    @IsOptional()
    payment_method_bill: string;

    @IsNumber()
    @IsOptional()
    subtotal_bill: number;

    @IsNumber()
    @IsOptional()
    iva_bill: number;

    @IsNumber()
    @IsOptional()
    total_bill: number;
}