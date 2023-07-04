import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserModel } from './entities/user.entity';
import { ErrorManager } from 'src/utils/error.manage';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserRepository } from './repositories/user.repository';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    
    constructor(@InjectRepository(UserModel) private userModel: Repository<UserModel>, private userRepository:UserRepository){}

    async findAll(): Promise<UserModel[]>{
        try {
            const userAll: UserModel[] = await this.userModel.find();
            if(userAll.length === 0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen usuarios registrados',
                });
            }
            return userAll;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async findOne(id_user: string): Promise<UserModel>{
        try {
            return await this.userModel.createQueryBuilder('user').where({id_user}).getOne();
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(createUserDto: CreateUserDto): Promise<UserModel>{
        try {
            const salt = await bcrypt.genSalt();
            createUserDto.password_user = await bcrypt.hash(createUserDto.password_user, salt);
            createUserDto.password_validation_user = await bcrypt.hash(createUserDto.password_validation_user, salt);
            const createUser: UserModel = await this.userModel.save(createUserDto);
            return createUser;
        } catch(e){
            throw new Error(e)
        }
    }

    async update(id_user: string, updateUserDto: UpdateUserDto): Promise<UpdateResult|undefined>{
        try {
            const updateUser: UpdateResult = await this.userModel.update(id_user, updateUserDto);
            if(updateUser.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'El usuario no se ha podido actualizar',
                });
            }
            return updateUser;
        } catch(e) {
            throw ErrorManager.createSignatureError(e.message);
        }
    }

    async remove(id_user: string): Promise<DeleteResult|undefined> {
        try {
            const removeUser: DeleteResult = await this.userModel.delete(id_user);
            if(removeUser.affected === 0){
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'EL usuario no se ha podido eliminar',
                })
            }
            return removeUser;
        } catch (e) {
            throw new ErrorManager.createSignatureError(e.message);
        }
    }

    public async findBy({key, value}:{
        key : keyof CreateUserDto;
        value : any;
      }){
        try {
          const user : UserModel = await this.userModel
          .createQueryBuilder('user')
          .addSelect('user.password_user')
          .where({[key]: value})
          .getOne(); 
          return user;
        }catch(e){
          throw ErrorManager.createSignatureError(e.message);
        }
      }
}
