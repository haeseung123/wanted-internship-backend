import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users'})
export class UsersEntity{
    @PrimaryGeneratedColumn()
    uid: number

    @Column({ type: 'varchar', length: 50, unique: true })
    email: string

    @Column({ type: 'varchar', length: 100 })
    password: string

    @Column({ type: 'varchar', length: 20 })
    nickname: string

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date   

}

