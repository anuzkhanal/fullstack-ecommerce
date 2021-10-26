import express from 'express'

import {
  createUser,
  findUserById,
  deleteUser,
  findAllUser,
  updateUserById,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix

router.get('/', findAllUser)
router.get('/:userId', findUserById)
router.post('/', createUser)
router.put('/:userId', updateUserById)
router.delete('/:userId', deleteUser)

export default router
