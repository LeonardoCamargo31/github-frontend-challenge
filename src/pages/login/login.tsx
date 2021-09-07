import React, { useState } from 'react'
import { IGetToken } from '../../domain/service/getToken'
import { Redirect } from 'react-router-dom'
import LocalStorageHelper from '../../utils/localStorageHelper'

const initialInputUsername = {
  value: '',
  error: ''
}

type LoginProps = {
  getTokenService: IGetToken
}

function Login({ getTokenService }: LoginProps) {
  const [username, setUsername] = useState(initialInputUsername)
  const [redirect, setRedirect] = useState(false)

  const handleInputUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername({ ...username, value: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!username.value) {
      setUsername({ ...username, error: 'Campo obrigatório' })
      return
    }

    const response = await getTokenService.handler(username.value)
    if (!response.success || !response.data) {
      setUsername({ ...username, error: 'Usuário não encontrado' })
      return
    }

    LocalStorageHelper.setUserLogged(response.data)
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/" />
  } else {
    return (
      <div className="App">
        <img src="" alt="" />
        <form>
          <div className="c-input">
            <label htmlFor="username">Usuário</label>
            <input
              id="username"
              type="text"
              placeholder="Usuário"
              onChange={handleInputUsername}
              value={username.value}
              aria-describedby="username_error"
            />
            <span id="username_error" role="alert">
              {username.error}
            </span>
          </div>

          <button onClick={handleSubmit}>Entrar</button>
        </form>
      </div>
    )
  }
}

export default Login
