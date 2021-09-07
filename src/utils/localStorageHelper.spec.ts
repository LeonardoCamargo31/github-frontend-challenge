import LocalStorageHelper from './localStorageHelper'
import { User } from '../domain/entities/user'
import { Token } from '../domain/entities/token'

const makeFakeToken: Token = {
  id: 1,
  user_id: 1,
  created_at: '2021-09-05T14:16:17.266-03:00'
}

const makeFakeUser: User = {
  id: 1,
  name: 'Robert C. Martin',
  email: 'unclebob@cleancoder.com',
  location: 'Gurnee, IL',
  username: 'unclebob',
  avatar: 'https://avatars.githubusercontent.com/u/36901?v=4',
  bio: 'Uncle Bob. Author of Clean Code.',
  created_at: '2021-09-05T14:16:17.266-03:00',
  updated_at: '2021-09-05T14:16:17.266-03:00'
}

test('should add user from local storage', async () => {
  LocalStorageHelper.setUserLogged({ token: makeFakeToken, user: makeFakeUser })
  const userLogged = LocalStorageHelper.getUserLogged()
  expect(userLogged.token.id).toBe(1)
  expect(userLogged.user.username).toBe('unclebob')
})

test('should remove user from local storage', async () => {
  LocalStorageHelper.setUserLogged({ token: makeFakeToken, user: makeFakeUser })
  LocalStorageHelper.removeUserLogged()

  expect(() => LocalStorageHelper.getUserLogged()).toThrow(
    'user logged is empty'
  )
})

test('should return true if authenticated user', async () => {
  LocalStorageHelper.setUserLogged({ token: makeFakeToken, user: makeFakeUser })
  const isLogged = LocalStorageHelper.isAuthenticated()
  expect(isLogged).toBeTruthy()
})
