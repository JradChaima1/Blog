/* eslint-disable prettier/prettier */

import {Entity, PrimaryGeneratedColumn,Column, BeforeInsert} from "typeorm"
@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column({unique : true})
    username:string;
    @Column()
    email:string;
    @Column()
    password:string;
   

}