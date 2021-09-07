import axios from '../utils/axios'
import { IGetToken, ResponseGetToken } from '../domain/service/getToken'

class GetTokenService implements IGetToken {
  async handler(username: string): Promise<ResponseGetToken> {
    return axios
      .post('token', { username })
      .then((response) => {
        console.log(response.data.data)
        return response.data
      })
      .catch((error) => {
        return error.response.data
      })
  }
}

export default new GetTokenService()
