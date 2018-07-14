import { ApiModelProperty } from "@nestjs/swagger";

export class SignUpRequest {
    @ApiModelProperty()
    public email: string;

    @ApiModelProperty()
    public username: string;

    @ApiModelProperty()
    public password: string;
    
    @ApiModelProperty()
    public confirmationPassword: string;
}