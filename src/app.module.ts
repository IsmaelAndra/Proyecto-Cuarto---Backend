import { Module } from '@nestjs/common';
import { VentasModule } from './modules/ventas/ventas.module';
import { UsersModule } from './modules/users/users.module';
import { SalesModule } from './modules/sales/sales.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.key';
import { join } from 'path';

@Module({
  imports: [SalesModule, UsersModule, VentasModule, DatabaseModule, ConfigModule,
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config:ConfigService){
            return {
                type: 'postgres',
                username: config.get(Configuration.USERNAME),
                password:config.get(Configuration.PASSWORD),
                host:config.get(Configuration.HOST),
                port: 5432,
                database:config.get(Configuration.DATABASE),
                entities: [join(__dirname, '**', '*.entity.{ts,js}')],
                migrations: [__dirname + '/migrations/*.{.ts,.js}'],
                synchronize: true,
            }
        }
    }
    )],
  controllers: [],
})
export class AppModule {
  static port: number | string;
    constructor(private readonly _configService: ConfigService){
        AppModule.port = this._configService.get(Configuration['PORT'])
    }
}