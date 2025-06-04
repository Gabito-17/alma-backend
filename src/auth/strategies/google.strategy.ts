import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  Profile as GoogleProfile,
  Strategy,
  StrategyOptions,
  VerifyCallback,
} from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      callbackURL: process.env.GOOGLE_CALLBACK_URL ?? '',
      scope: ['profile', 'email'],
    } as StrategyOptions);
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: GoogleProfile,
    done: VerifyCallback,
  ): void {
    const user = {
      email: profile.emails?.[0]?.value ?? '',
      name: profile.name?.givenName ?? '',
      lastName: profile.name?.familyName ?? '',
      picture: profile.photos?.[0]?.value ?? '',
      provider: 'google',
    };

    done(null, user);
  }
}
