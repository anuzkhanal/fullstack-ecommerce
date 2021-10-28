import { Request, Response, NextFunction } from 'express'

import UserService from '../services/user'
import User from '../models/User'
import { BadRequestError, InternalServerError } from '../helpers/apiError'

export const findAllUser = async (req: Request, res: Response) => {
  const allUser = await UserService.findAllUser()
  res.json(allUser)
}

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password, gender } = req.body

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      gender,
    })

    await UserService.createUser(user)
    res.json(user)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

export const findUserById = async (req: Request, res: Response) => {
  const userId = req.params['userId']
  const user = await UserService.findUser(userId)
  res.json(user)
}

export const updateUserById = async (req: Request, res: Response) => {
  const userId = req.params['userId']
  const userData = req.body
  const user = await UserService.updateUser(userId, userData)
  res.json(user)
}

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params['userId']
  const user = await UserService.deleteUser(userId)
  res.json(user)
}

export const loginUser = async (req: Request, res: Response) => {
  console.log('user Controller', req.user)
  res.json(req.user)
  res.send('Login Sucess')
}
