import { IUser } from "./user.interface";
import { ApiModelProperty } from "@nestjs/swagger";
import { UserRole } from "./user.roles";

export class UserDto implements IUser {
    @ApiModelProperty()
    id: number;    

    @ApiModelProperty()
    username: string;

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    password: string;

    @ApiModelProperty()
    accesstoken?: string;

    @ApiModelProperty()
    refreshtoken?: string;

    @ApiModelProperty({enum: UserRole})
    role?: number;
}