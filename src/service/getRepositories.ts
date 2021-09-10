import axios from '../utils/axios'
import {
  IGetRepositoriesService,
  ResponseGetURepositories
} from '../domain/service/getRepositories'

class GetRepositoriesService implements IGetRepositoriesService {
  async handler(idUser: number): Promise<ResponseGetURepositories> {
    return axios
      .get('/repository/LeonardoCamargo')
      .then((response) => {
        console.log(response.data.data)
        return response.data
      })
      .catch((error) => {
        return error.response.data
      })
  }
}

export default new GetRepositoriesService()
