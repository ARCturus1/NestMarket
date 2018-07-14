import { Controller, Get, Inject, Post, Body, HttpCode, UseGuards, Res, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "models/user/user.dto";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./services/auth.service";
import { JwtPayload } from "./interfaces/jwt-payload.interface";
import { SignInRequest } from "./models/sign.in.request";
import { SignUpRequest } from "./models/sign.up.request";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";

@ApiUseTags('cats')
@Controller('Users')
export class UserController {
    constructor(@Inject(UserService) private userService: UserService,
        @Inject(AuthService) private authService: AuthService) { }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    public async getAllUsers(): Promise<UserDto[]> {
        return await this.userService.findAll();
    }

    @Post()
    @HttpCode(204)
    public async add(@Body() user: UserDto) {
        return await this.userService.add(user);
    }

    @Post('SignIn')
    public async signIn(@Body() user: SignInRequest, @Res() response) {
        //if (!user || !user.email) { response.status(HttpStatus.BAD_REQUEST).send(); }

        try {
            const userEntity = await this.userService.findOneByEmail(user.email);
            if (!!userEntity) {

                const userJwt: JwtPayload = {
                    email: userEntity.email,
                    username: userEntity.username,
                    role: userEntity.role
                };

                return await this.authService.createToken(userJwt);
            }
        } catch (ex) {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post('SignUp')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async signUp(@Body() user: SignUpRequest, @Res() response) {
        if (!user && !user.email) { response.status(HttpStatus.BAD_REQUEST).send(); }

        const userEntity = await this.userService.findOneByEmail(user.email);

        const userJwt: JwtPayload = {
            email: userEntity.email,
            username: userEntity.username,
            role: userEntity.role
        };

        return await this.authService.createToken(userJwt);
    }
}