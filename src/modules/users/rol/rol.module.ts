import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { RolModel } from './entities/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [RolService],
  controllers: [RolController],
  exports: [RolService],
  imports: [TypeOrmModule.forFeature([RolModel])]
})
export class RolModule {}
