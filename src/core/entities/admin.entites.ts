import { BaseEntity } from "src/common/database/base-entitie";
import { Column, Entity } from "typeorm";

@Entity('admin')
export class AdminEntity extends BaseEntity{
    @Column({type: 'varchar', unique: true, name: "username"})
    username: string

    @Column({type: 'varchar', name: 'hashed_password'})
    hashed_password: string

    @Column({type: 'varchar',unique: true, name: "phone_number"})
    phone_number: string
}