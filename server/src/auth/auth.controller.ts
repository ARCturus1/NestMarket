import { Controller, Get, Inject } from '@nestjs/common';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @Get('token')
  public async getTocken() {
    return await this.authService.createToken();
  }
}
