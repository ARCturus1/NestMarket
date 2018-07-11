import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './user.roles';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column({ length: 500 })
  username: string;

  @ApiModelProperty()
  @Column()
  password: string;

  @ApiModelProperty()
  @Column()
  accesstoken: string;

  @ApiModelProperty()
  @Column()
  refreshtoken: string;

  @ApiModelProperty()
  @Column()
  role: number;
}
