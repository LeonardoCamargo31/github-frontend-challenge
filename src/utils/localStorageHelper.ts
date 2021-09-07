import { throws } from 'assert'
import { Token } from '../domain/entities/token'
import { User } from '../domain/entities/user'

type UserLogged = {
  user: User
  token: Token
}

class LocalStorageHelper {
  isAuthenticated(): boolean {
    return localStorage.getItem('auth-user-logged') !== null
  }

  getUserLogged(): UserLogged {
    const data = localStorage.getItem('auth-user-logged')
    if (!data) throw new Error('user logged is empty')
    return JSON.parse(data)
  }

  setUserLogged(userLogged: UserLogged): void {
    localStorage.setItem('auth-user-logged', JSON.stringify(userLogged))
  }

  removeUserLogged() {
    localStorage.removeItem('auth-user-logged')
  }
}

export default new LocalStorageHelper()
