import { EntityRepository, Repository } from "typeorm";
import { UserModel } from "../entities/user.entity";

@EntityRepository(UserModel)
export class UserRepository extends Repository<UserModel>{
    
}