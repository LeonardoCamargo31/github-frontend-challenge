import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import LoginLayoutRoute from './layout/loginLayout/loginLayout'
import LoggedLayoutRoute from './layout/loggedLayout/loggedLayout'
import Main from './pages/main/main'

import GetTokenService from './service/getToken'
import GetUserService from './service/getUser'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LoginLayoutRoute
          path="/login"
          component={Login}
          getTokenService={GetTokenService}
        />
        <LoggedLayoutRoute
          path="/"
          exact
          component={Main}
          getUserService={GetUserService}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
