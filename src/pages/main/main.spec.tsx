import {
  render,
  act,
  waitForElementToBeRemoved,
  waitFor
} from '@testing-library/react'
import { IGetUser, ResponseGetUser } from '../../domain/service/getUser'
import { User } from '../../domain/entities/user'
import { Token } from '../../domain/entities/token'
import Main from './main'
import LocalStorageHelper from '../../utils/localStorageHelper'

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

const makeGetUserService = (): IGetUser => {
  class GetUserStub implements IGetUser {
    async handler(): Promise<ResponseGetUser> {
      return {
        data: makeFakeUser,
        success: true,
        message: 'user found successfully'
      }
    }
  }
  return new GetUserStub()
}

const setup = () => {
  LocalStorageHelper.setUserLogged({ token: makeFakeToken, user: makeFakeUser })
  const getUserService = makeGetUserService()

  return {
    LocalStorageHelper,
    getUserService
  }
}

test('should displays the text "… Carregando" while searching for user', async () => {
  const { getUserService } = setup()
  await act(async () => {
    const { getByText } = render(<Main getUserService={getUserService} />)
    expect(getByText('… Carregando')).toBeInTheDocument()
  })
})

test('should remove the text "… Carregando" after loading user', async () => {
  const { getUserService } = setup()
  await act(async () => {
    const { getByText } = render(<Main getUserService={getUserService} />)
    await waitForElementToBeRemoved(() => getByText('… Carregando'))
  })
})

test('should display user data', async () => {
  const { getUserService } = setup()

  await act(async () => {
    const { getByText, getByRole } = render(
      <Main getUserService={getUserService} />
    )
    await waitFor(() => getByText('Robert C. Martin'))

    const title = getByRole('heading', { level: 1 })
    expect(title.textContent).toBe('Robert C. Martin')
  })
})

test('should display user data', async () => {
  const { getUserService } = setup()

  jest.spyOn(getUserService, 'handler').mockImplementationOnce((): any => {
    return { success: false, message: 'user not found' }
  })

  await act(async () => {
    const { getByText } = render(<Main getUserService={getUserService} />)
    expect(getByText('… Carregando')).toBeInTheDocument()
  })
})
