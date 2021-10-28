import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import cors from 'cors'

import movieRouter from './routers/movie'
import userRouter from './routers/user'
import productRouter from './routers/product'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'
import passport from 'passport'
import { googleStrategy, jwtStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(apiContentType)

// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

//passport stratigies
passport.use(googleStrategy)
passport.use(jwtStrategy)

// All ROUTERS
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/product', productRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
