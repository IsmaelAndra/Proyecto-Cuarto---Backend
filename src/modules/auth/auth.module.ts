import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../users/user/entities/user.entity';
import { jwtConstants } from '../jwt.constants';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../users/user/user.service';
import { UserRepository } from '../users/user/repositories/user.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
  exports: [AuthService],
  imports: [TypeOrmModule.forFeature([UserModel, UserRepository]),
  JwtModule.register({
    secret:jwtConstants.secret,
    signOptions: {expiresIn:'1h'},
  })],
})
export class AuthModule {}
