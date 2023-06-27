import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto, UpdateRolDto } from './dto/rol.dto';

@Controller('rol')
export class RolController {
    constructor(private rolService:RolService){}

    @Get()
    findAllRols(){
        return this.rolService.findAll();
    }

    @Get(':id_rol')
    findOneRol(@Param('id_rol') id_rol: string){
        return this.rolService.findOne(id_rol);
    }

    @Post()
    createRol(@Body() newRolDto: CreateRolDto){
        return this.rolService.create(newRolDto);
    }

    @Patch(':id_rol')
    updateRol(@Param('id_rol') id_rol: string, @Body() updateRolDto: UpdateRolDto){
        return this.rolService.update(id_rol, updateRolDto);
    }

    @Delete(':id_rol')
    removeRol(@Param('id_rol') id_rol: string){
        return this.rolService.remove(id_rol);
    }
}
