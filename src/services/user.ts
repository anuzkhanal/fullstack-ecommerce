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

export default { findAllUser, createUser, findUser, updateUser, deleteUser }
