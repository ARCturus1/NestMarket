import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { userProviders } from "./user.provider";
import { UserService } from "./user.service";
import { TypeOrmModule } from "../../node_modules/@nestjs/typeorm";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./services/jwt.strategy";
import { databaseProviders } from "database/database.providers";

@Module({
    controllers: [UserController],
    providers: [
        ...databaseProviders,
        ...userProviders,
        UserService,
        AuthService,
        JwtStrategy
    ]
})
export class UserModule { }