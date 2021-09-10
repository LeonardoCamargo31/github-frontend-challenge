import { Repository } from '../entities/repository'

export type ResponseGetURepositories = {
  success: boolean
  message: string
  data?: Repository[]
}

export interface IGetRepositoriesService {
  handler: (id: number) => Promise<ResponseGetURepositories>
}
