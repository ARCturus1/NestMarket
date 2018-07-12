import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from 'models/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryToken')
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOneByEmail(userName: string) {
    return await this.userRepository.findOne({ username: userName });
  }

  async add(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.create(user);
  }
}
