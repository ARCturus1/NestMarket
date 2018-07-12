import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { userProviders } from "./user.provider";
import { UserService } from "./user.service";
import { TypeOrmModule } from "../../node_modules/@nestjs/typeorm";
import { databaseProviders } from "database/database.providers";

@Module({
    controllers: [UserController],
    providers: [
        ...databaseProviders,
        ...userProviders, 
        UserService
    ]
})
export class UserModule {}