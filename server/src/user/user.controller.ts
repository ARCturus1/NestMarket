import { Controller, Get, Inject, Post, Body, HttpCode, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "models/user/user.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('users')
export class UserController {
    constructor(@Inject(UserService) private userService: UserService) {}

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
}