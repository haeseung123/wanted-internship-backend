import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users'})
export class UsersEntity{
    @PrimaryGeneratedColumn()
    uid: number

    @Column({ type: 'varchar', unique: true })
    userId: string

    @Column({ type: 'varchar' })
    password: string

    @Column({ type: 'varchar' })
    salt: string

    @Column({ type: 'varchar' })
    name: string

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date   

}

