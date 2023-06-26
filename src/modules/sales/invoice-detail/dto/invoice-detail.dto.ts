import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/modules/common";

export class CreateInvoiceDetailDto extends BaseDto {
    @IsString()
    @IsNotEmpty()
    description_invoice_detail: string;

    @IsNumber()
    @IsNotEmpty()
    quantity_invoice_detail: number;

    @IsNumber()
    @IsNotEmpty()
    subtotal_invoice_detail: number;
}

export class UpdateInvoiceDetailDto extends PartialType(CreateInvoiceDetailDto){
    @IsString()
    @IsOptional()
    description_invoice_detail: string;

    @IsNumber()
    @IsOptional()
    quantity_invoice_detail: number;

    @IsNumber()
    @IsOptional()
    subtotal_invoice_detail: number;
}