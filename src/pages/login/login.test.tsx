import { render, screen, fireEvent, act } from '@testing-library/react'
import LocalStorageHelper from '../../utils/localStorageHelper'
import { BrowserRouter, Switch } from 'react-router-dom'
import { IGetToken, ResponseGetToken } from '../../domain/service/getToken'
import { User } from '../../domain/entities/user'
import { Token } from '../../domain/entities/token'
import Login from './login'

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

const makeGetTokenService = (): IGetToken => {
  class GetTokenStub implements IGetToken {
    async handler(): Promise<ResponseGetToken> {
      return {
        data: { token: makeFakeToken, user: makeFakeUser },
        success: true,
        message: 'token created successfully'
      }
    }
  }
  return new GetTokenStub()
}

const setup = () => {
  const getTokenService = makeGetTokenService()
  render(
    <BrowserRouter>
      <Switch>
        <Login getTokenService={getTokenService} />
      </Switch>
    </BrowserRouter>
  )

  const input = screen.getByLabelText('Usuário') as HTMLInputElement
  const button = screen.getByText('Entrar')
  const messageInput = screen.getByRole('alert') as HTMLLabelElement

  return {
    getTokenService,
    input,
    button,
    messageInput
  }
}

beforeEach(() => {
  LocalStorageHelper.removeUserLogged()
})

test('should return error message, if username is empty', async () => {
  const { button, messageInput } = setup()
  await act(async () => {
    await fireEvent.click(button)
  })
  expect(messageInput.textContent).toBe('Campo obrigatório')
})

test('should return error message, if user not found', async () => {
  const { input, button, messageInput, getTokenService } = setup()

  jest.spyOn(getTokenService, 'handler').mockImplementationOnce((): any => {
    return { success: false, message: 'user not found' }
  })

  fireEvent.change(input, { target: { value: 'any_username' } })
  expect(input.value).toBe('any_username')

  await act(async () => {
    await fireEvent.click(button)
  })
  expect(messageInput.textContent).toBe('Usuário não encontrado')
})

test('should save user to local storage', async () => {
  const { input, button } = setup()

  fireEvent.change(input, { target: { value: 'any_username' } })
  expect(input.value).toBe('any_username')

  await act(async () => {
    await fireEvent.click(button)
  })

  const userLogged = LocalStorageHelper.getUserLogged()
  expect(userLogged.token.id).toBe(1)
  expect(userLogged.user.username).toBe('unclebob')
})
