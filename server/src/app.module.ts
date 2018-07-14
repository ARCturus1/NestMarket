import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'user/user.module';
import { databaseProviders } from 'database/database.providers';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        ...databaseProviders
    ]
})
export class AppModule { }
