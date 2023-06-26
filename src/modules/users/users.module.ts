import { Module } from '@nestjs/common';
import { RolModule } from './rol/rol.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [RolModule, UserModule]
})
export class UsersModule {}
