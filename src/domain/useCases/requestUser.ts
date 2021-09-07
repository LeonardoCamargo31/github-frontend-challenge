import { User } from '../entities/user'
import { Token } from '../entities/token'

export type ResponseRequestUser = {
  success: boolean
  message: string
  data?: {
    user: User
    token: Token
  }
}

export default interface IRequestUser {
  handler: (username: string) => Promise<ResponseRequestUser>
}
