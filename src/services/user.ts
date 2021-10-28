import { UserDocument } from './../models/User'
import User from '../models/User'

const findAllUser = async () => {
  return User.find()
}

const createUser = async (userData: UserDocument) => {
  return User.create(userData)
}

const findUser = async (userId: string) => {
  return User.findById(userId)
}

const updateUser = async (userId: string, userData: UserDocument) => {
  return User.findByIdAndUpdate(userId, userData, { new: true }).exec()
}

const deleteUser = async (userId: string) => {
  return User.findByIdAndDelete(userId)
}

const findOrCreate = async (parsedToken: any) => {
  const user = await User.findOne({ email: parsedToken.payload.email })

  if (!user) {
    const newUser = new User({
      email: parsedToken.payload.email,
      firstName: parsedToken.payload.given_name,
      lastName: parsedToken.payload.family_name,
    })

    await newUser.save()
    return newUser
  } else {
    return user
  }
}

const findUserByEmail = async (userEmail: string) => {
  return User.findOne({ email: userEmail })
}

export default {
  findAllUser,
  createUser,
  findUser,
  updateUser,
  deleteUser,
  findOrCreate,
  findUserByEmail,
}
