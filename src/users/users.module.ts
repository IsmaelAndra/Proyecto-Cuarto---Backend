import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolModule } from './rol/rol.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [RolModule, ProfileModule]
})
export class UsersModule {}
