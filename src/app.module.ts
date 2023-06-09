import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { LoginModule } from './module/login.module';
import { RegistrationModule } from './module/registration.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env.configuration'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
      ({
        type: 'mysql',
        synchronize: false,
        host: configService.get<string>('DATABASE_HOST'),
        port: Number(configService.get<string>('DATABASE_PORT')),
        username: configService.get<string>('DATABASE_USER_NAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        entities: ['../dist/entity/*.entity.{ts,js}'],
        subscribers: ['../dist/entity/*.entity.{ts,js}'],
        migrations: ['../dist/entity/*.entity.{ts,js}'],
        namingStrategy: new SnakeNamingStrategy(),
      } as TypeOrmModuleOptions),
    }),
    LoginModule,
    RegistrationModule
  ],

})
export class AppModule { }
