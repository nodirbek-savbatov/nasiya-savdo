import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'bigint', name: "created_at"})
    created_at: number

    @Column({type: 'bigint', name: 'updated_at'})
    updated_at: number

    @Column({type: 'boolean', default: false})
    is_deleted: boolean
}