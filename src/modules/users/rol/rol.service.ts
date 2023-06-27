import { Injectable } from '@nestjs/common';
import { CreateRolDto, UpdateRolDto } from './dto/rol.dto';
import { RolModel } from './entities/rol.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manage';

@Injectable()
export class RolService {
    
    constructor(@InjectRepository(RolModel) private rolModel: Repository<RolModel>){}

    async findAll(): Promise<RolModel[]>{
        try {
            const rolAll: RolModel[] = await this.rolModel.find();
            if(rolAll.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen roles registrados',
                });
            }
            return rolAll;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id_rol: string): Promise<RolModel>{
        try {
            return await this.rolModel.createQueryBuilder('rol').where({id_rol}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createRolDto: CreateRolDto): Promise<RolModel>{
        try {
            const createRol: RolModel = await this.rolModel.save(createRolDto);
            return createRol;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_rol: string, updateRolDto: UpdateRolDto): Promise<UpdateResult|undefined>{
        try {
            const updateRol: UpdateResult = await this.rolModel.update(id_rol, updateRolDto);
            if(updateRol.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'El rol no se ha podido actualizar',
                });
            }
            return updateRol;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message);
        }
    }

    async remove(id_rol: string): Promise<DeleteResult|undefined> {
        try {
            const removeRol: DeleteResult = await this.rolModel.delete(id_rol);
            if(removeRol.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'EL rol no se ha podido eliminar',
                })
            }
            return removeRol;
        } catch (e) {
            throw new ErrorManager.createSignatureError(e.message);
        }
    }
}
