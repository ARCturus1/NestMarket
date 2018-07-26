import { Controller, Get, Inject, Post, Body, HttpCode, UseGuards, Res, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "models/user/user.dto";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./services/auth.service";
import { JwtPayload } from "./interfaces/jwt-payload.interface";
import { SignInRequest } from "./models/sign.in.request";
import { SignUpRequest } from "./models/sign.up.request";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { UserEntity } from "models/user/user.entity";

@ApiUseTags('cats')
@Controller('Users')
export class UserController {
    constructor(@Inject(UserService) private userService: UserService,
        @Inject(AuthService) private authService: AuthService) { }

    @Get()
    //@UseGuards(AuthGuard('jwt'))
    public async getAllUsers(): Promise<UserDto[]> {
        return await this.userService.getAll();
    }

    @Post()
    @HttpCode(204)
    public async add(@Body() user: UserDto) {
        return await this.userService.save(user);
    }

    @ApiResponse({ status: 404, description: 'The record not found.' })
    @ApiResponse({ status: 400, description: 'Bad request.' })
    @Post('SignIn')
    public async signIn(@Body() user: SignInRequest, @Res() response) {
        if (!user || !user.email) { response.status(HttpStatus.BAD_REQUEST).send(); }

        const userEntity = await this.userService.findOne({ email: user.email });
        if (!!userEntity) {
            const userJwt: JwtPayload = {
                email: userEntity.email,
                username: userEntity.username,
                role: userEntity.role
            };

            response.status(HttpStatus.OK).send(userJwt);
        }
        response.status(HttpStatus.NOT_FOUND).send();
    }

    @Post('SignUp')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    public async signUp(@Body() user: SignUpRequest, @Res() response) {
        if (!user || !user.email || !user.password) {
            response.status(HttpStatus.BAD_REQUEST).send();
        }

        const userData: UserEntity = new UserEntity()
        userData.username = user.username;
        userData.email = user.email;
        userData.password = user.password;
        userData.role = 2;

        const userEntity = await this.userService.save(userData);

        const userJwt: JwtPayload = {
            email: userEntity.email,
            username: userEntity.username,
            role: userEntity.role
        };

        try {
            const token = await this.authService.createToken(userJwt);
            response.status(HttpStatus.CREATED).send(token);
        } catch (ex) {
            response.status(HttpStatus.BAD_GATEWAY).send(ex);
        }
    }
}