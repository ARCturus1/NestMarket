import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from 'models/user/user.entity';
import { BaseService } from 'shared/services/base.service';

@Injectable()
export class UserService extends BaseService<UserEntity> {
    constructor(@Inject('UserRepositoryToken')
    private readonly userRepository: Repository<UserEntity>) {
        super(userRepository);
    }

    // public async findAll(): Promise<UserEntity[]> {
    //     return await this.userRepository.find();
    // }

    // public async findOneByEmail(email: string) {
    //     return await this.userRepository.findOne({ email: email });
    // }

    // public async findOneByToken(token: string) {
    //     return await this.userRepository.findOne({ accesstoken: token });
    // }

    // public async save(user: UserEntity): Promise<UserEntity> {
    //     const existUser = await this.findOneByEmail(user.email)
    //     return !existUser ? await this.userRepository.save(user) : Promise.resolve(existUser);
    // }
}
