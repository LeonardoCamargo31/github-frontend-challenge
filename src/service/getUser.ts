import axios from '../utils/axios'
import { IGetUser, ResponseGetUser } from '../domain/service/getUser'

class GetUserService implements IGetUser {
  async handler(idUser: number): Promise<ResponseGetUser> {
    return axios
      .get(`user/${idUser}`)
      .then((response) => {
        console.log(response.data.data)
        return response.data
      })
      .catch((error) => {
        return error.response.data
      })
  }
}

export default new GetUserService()
