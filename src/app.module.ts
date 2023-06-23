import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { InventaryModule } from './inventary/inventary.module';

@Module({
  imports: [UsersModule, InventaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}