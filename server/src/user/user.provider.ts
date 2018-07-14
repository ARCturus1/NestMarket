import { Connection, Repository } from 'typeorm';
import { UserEntity } from 'models/user/user.entity';

export const userProviders = [
    {
        provide: 'UserRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(UserEntity),
        inject: ['DbConnectionToken']
    },
];