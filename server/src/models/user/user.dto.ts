import { IUser } from "./user.interface";
import { ApiModelProperty } from "@nestjs/swagger";

export class UserDto implements IUser {
    @ApiModelProperty()
    id: number;    

    @ApiModelProperty()
    username: string;

    @ApiModelProperty()
    password: string;

    @ApiModelProperty()
    accesstoken: string;

    @ApiModelProperty()
    refreshtoken: string;

    @ApiModelProperty()
    role: number;
}