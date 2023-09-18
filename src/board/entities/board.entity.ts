import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { UsersEntity } from "src/users/entities/users.entity";


@Entity({ name: 'board' })
export class BoardEntity{
    @PrimaryGeneratedColumn()
    bid: number

    @Column({ type: 'varchar', length: 50 })
    title: string

    @Column({ type: 'varchar', length: 1000})
    content: string

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date

    @CreateDateColumn({ type: 'datetime' })
    updatedAt: Date

    @ManyToOne(() => UsersEntity, (users) => users.uid, { nullable: false })
    @JoinColumn({ name: 'uid'})
    uid: UsersEntity
}