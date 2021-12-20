/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { async } from 'rxjs';
import { AuthService } from './services/auth.service';

@Module({
 imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {expiresIn: '100s'}
            })
        })
    ],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}