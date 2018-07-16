import { Entity, PrimaryGeneratedColumn } from "../../../node_modules/typeorm";

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
}