import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../users/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserService } from '../users/user/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../jwt.constants';
import { PayLoadToken } from './login/interface/login.interface';
import { RegisterDto } from './login/dto/register.dto';
import { ErrorManager } from 'src/utils/error.manage';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserModel) private userRepository: Repository<UserModel>, private userService: UserService) { }

    public async validateUser(mail_user: string, password_user: string): Promise<UserModel | null> {
        const userByUsername = await this.userService.findBy({
            key: 'name_user',
            value: mail_user
        });
        const userByEmail = await this.userService.findBy({
            key: 'mail_user',
            value: mail_user
        });
        if (userByUsername) {
            const match = await bcrypt.compare(password_user, userByUsername.password_user)
            if (match) return userByUsername;
        }
        if (userByEmail) {
            const match = await bcrypt.compare(password_user, userByEmail.password_user)
            if (match) return userByEmail;
        }
        return null;
    }

    public signJWT({
        payload,
        secret,
        expires,
    }: {
        payload: jwt.JwtPayload;
        secret: string;
        expires: number | string;
    }) {
        return jwt.sign(payload, secret, { expiresIn: expires });
    }

    public async generateJWT(user: UserModel): Promise<any> {
        const getUser = await this.userService.findOne(user.id_user);
        const payload: PayLoadToken = {
            sub: getUser.id_user,
            name: getUser.name_user,
            mail: getUser.mail_user,
            photo: getUser.photo_user
        }
        return {
            accessToke: this.signJWT({
                payload,
                secret: jwtConstants.secret,
                expires: '1h',
            }),
            user,
        }
    }

    async register(createuserDto: RegisterDto):Promise<UserModel> {
        try {
          const salt = await bcrypt.genSalt();
          createuserDto.password_user = await bcrypt.hash(createuserDto.password_user, salt);
          return await this.userRepository.save(createuserDto);
          } catch (e) {
            throw ErrorManager.createSignatureError(e.message);
        }
      }
}
