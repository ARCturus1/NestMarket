import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user.roles';
import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from './user.interface';

@Entity()
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    username: string;

    @Column({ length: 500 })
    email: string;

    @Column()
    password: string;

    @Column()
    accesstoken: string;

    @Column()
    refreshtoken: string;

    @Column()
    role: number;
}
