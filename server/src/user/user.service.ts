import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from 'models/user/user.entity';

@Injectable()
export class UserService {
    constructor(@Inject('UserRepositoryToken')
        private readonly userRepository: Repository<UserEntity>) { }

    public async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    public async findOneByEmail(email: string) {
        return await this.userRepository.findOne({ email: email });
    }

    public async findOneByToken(token: string) {
        return await this.userRepository.findOne({ accesstoken: token });
    }

    public async add(user: UserEntity): Promise<UserEntity> {
        return await this.userRepository.create(user);
    }
}
