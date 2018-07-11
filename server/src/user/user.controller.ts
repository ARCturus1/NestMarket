import { Controller, Get, Inject, Post, Body, HttpCode } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UserController {
    constructor(@Inject(UserService) private userService: UserService) {}

    @Get()
    public async getAllUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    @HttpCode(204)
    public async add(@Body() user: User) {
        return await this.userService.add(user);
    }
}