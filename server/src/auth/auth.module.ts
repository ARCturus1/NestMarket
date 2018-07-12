import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.strategy';

@Module({
    controllers: [AuthController],
    providers: [
        AuthService, 
        JwtStrategy
    ]
})
export class AuthModule {};