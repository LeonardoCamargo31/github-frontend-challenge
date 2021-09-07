import React, { useState } from 'react'
import { IGetToken } from '../../domain/service/getToken'
import { Redirect } from 'react-router-dom'
import LocalStorageHelper from '../../utils/localStorageHelper'
import Button, { TypesButton } from '../../components/button/button'
import Input from '../../components/input/input'
import Logo from '../../components/logo/logo'
import { Grid, Col, Row } from 'react-flexbox-grid'

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
      <div className="u-login">
        <Grid className="u-login__wrapper">
          <Logo />
          <form>
            <div className="u-mb-20">
              <Input
                fieldName="username"
                onChange={handleInputUsername}
                value={username.value}
                messageError={username.error}
                placeholder="Usuário"
              />
            </div>

            <Button
              text={'Entrar'}
              type={TypesButton.primary}
              onClick={handleSubmit}
            />
          </form>
        </Grid>
      </div>
    )
  }
}

export default Login
