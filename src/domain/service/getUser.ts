import { User } from '../entities/user'

export type ResponseGetUser = {
  success: boolean
  message: string
  data?: User
}

export interface IGetUser {
  handler: (id: number) => Promise<ResponseGetUser>
}
