import * as jwt from 'jsonwebtoken';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from 'user/user.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly usersService: UserService,
  ) {}

  async createToken() {
    const user: JwtPayload = { email: 'user@email.com' };
    return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByEmail(payload.email);
  }
}
