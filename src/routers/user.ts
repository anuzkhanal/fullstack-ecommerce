import express from 'express'
import passport from 'passport'

import {
  createUser,
  findUserById,
  deleteUser,
  findAllUser,
  updateUserById,
  loginUser,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix

router.post(
  '/login',
  passport.authenticate('google-id-token', { session: false }),
  loginUser
)
router.get('/', passport.authenticate('jwt', { session: false }), findAllUser)
router.get(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  findUserById
)
router.post('/', passport.authenticate('jwt', { session: false }), createUser)
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUserById
)
router.delete(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  deleteUser
)

export default router
