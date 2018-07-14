import { ApiModelProperty } from "@nestjs/swagger";


export class SignInRequest {
    @ApiModelProperty()
    public email: string;

    @ApiModelProperty()
    public password: string;

    @ApiModelProperty()
    public rememberMe: boolean;
}