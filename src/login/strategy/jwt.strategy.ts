import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET as string || 'e2c3bb6a81c7a2b6568816ac20ea4a8acec2cf0349692a7e503429bb20c0',
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.userId,
      username: payload.username,
      role: payload.role,
     
    };
  }
}