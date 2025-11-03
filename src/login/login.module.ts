import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }), 
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'e2c3bb6a81c7a2b6568816ac20ea4a8acec2cf0349692a7e503429bb20c0',
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy], 
  exports: [PassportModule, JwtModule], 
})
export class LoginModule {}
