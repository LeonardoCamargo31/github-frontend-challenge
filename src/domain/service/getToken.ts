import { User } from '../entities/user'
import { Token } from '../entities/token'

export type ResponseGetToken = {
  success: boolean
  message: string
  data?: {
    user: User
    token: Token
  }
}

export interface IGetToken {
  handler: (username: string) => Promise<ResponseGetToken>
}
