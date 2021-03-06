/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import {UserEntity}  from './models/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule
    ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
