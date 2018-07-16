import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository, DeepPartial, BaseEntity, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class BaseService<T extends BaseEntity> {
    constructor(private readonly repository: Repository<T>) { }

    public async getAll(): Promise<T[]> {
        return await this.repository.find();
    }

    public async findOne(filter = {}) {
        return await this.repository.findOne(filter);
    }

    public async save(entity: any): Promise<T> {
        return await this.repository.save(entity);
    }

    public async update(filter = {}, object: DeepPartial<T>): Promise<UpdateResult> {
        return await this.repository.update(filter, object);
    }

    public async delete(filter = {}) : Promise<DeleteResult> {
        return await this.repository.delete(filter);
    }
}