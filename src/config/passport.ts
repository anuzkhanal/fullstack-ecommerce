import { JWT_SECRET } from './../util/secrets'
import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import jwt from 'jsonwebtoken'

import { Request, Response, NextFunction } from 'express'

import UserService from '../services/user'

const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
  },
  //make typescript type for parsedToken and payload instead of any
  async (parsedToken: any, googleId: any, done: any) => {
    // console.log('Parsed Token', parsedToken)
    const user = await UserService.findOrCreate(parsedToken)
    const token = jwt.sign({ email: user.email }, JWT_SECRET)
    done(null, { user, token })
  }
)

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done) => {
    console.log('payload', payload)
    const userEmail = payload.email
    const foundUser = UserService.findUserByEmail(userEmail)
    done(null, foundUser)
  }
)
