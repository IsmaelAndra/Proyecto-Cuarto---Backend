import { Module } from '@nestjs/common';
import { InventaryController } from './inventary/inventary.controller';
import { InventaryController } from './inventary.controller';
import { InventaryService } from './inventary.service';
import { CategoryModule } from './category/category.module';
import { InputModule } from './input/input.module';
import { OutputService } from './output/output.service';
import { OutputModule } from './output/output.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  controllers: [InventaryController],
  providers: [InventaryService, OutputService],
  imports: [CategoryModule, InputModule, OutputModule, ProvidersModule]
})
export class InventaryModule {}
