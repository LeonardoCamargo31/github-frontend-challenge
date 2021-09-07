import axios from '../utils/axios'
import IRequestUser, {
  ResponseRequestUser
} from '../domain/useCases/requestUser'

export default class RequestUser implements IRequestUser {
  async handler(username: string): Promise<ResponseRequestUser> {
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
