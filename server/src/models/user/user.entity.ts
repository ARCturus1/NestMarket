import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user.roles';
import { ApiModelProperty } from '@nestjs/swagger';
import { IUser } from './user.interface';
import { BaseEntity } from 'shared/models/base.entity';

@Entity()
export class UserEntity extends BaseEntity implements IUser {
    // @PrimaryGeneratedColumn()
    // id: number;

    @Column({ length: 500 })
    username: string;

    @Column({ length: 500 })
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    accesstoken?: string;

    @Column({nullable: true})
    refreshtoken?: string;

    @Column({nullable: true})
    role?: number;
}
