import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { SalesModule } from './modules/sales/sales.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.key';
import { join } from 'path';
import { StoreModule } from './modules/store/store.module';
import { EventModule } from './modules/event/event.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserRepository } from './modules/users/user/repositories/user.repository';

@Module({
  imports: [SalesModule, UsersModule, StoreModule, DatabaseModule, ConfigModule, EventModule,
    TypeOrmModule.forRootAsync(
      {
        imports: [ConfigModule, AuthModule],
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
    ),
    AuthModule],
    providers: [UserRepository]
})
export class AppModule {
  static port: number | string;
    constructor(private readonly _configService: ConfigService){
        AppModule.port = this._configService.get(Configuration['PORT'])
    }
}