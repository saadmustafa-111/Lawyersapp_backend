import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [PassportModule, UsersModule,JwtModule.register({
    secret: process.env.JWT_SECRET as string || 'e2c3bb6a81c7a2b6568816ac20ea4a8acec2cf0349692a7e503429bb20c0',})],
  controllers: [LoginController],
  providers: [LoginService],
  exports:[LoginService],
})
export class LoginModule {}
