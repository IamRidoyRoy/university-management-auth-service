// We write database/business logic at service

import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // I need a auto generated incremental id
  const id = await generatedUserId()

  user.id = id

  // default password
  if (!user.password) {
    user.password = config.student_default_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create new User')
  }

  return createdUser
}

export default { createUser }
