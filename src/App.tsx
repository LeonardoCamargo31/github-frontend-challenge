import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import LoginLayout from './layout/loginLayout'

import RequestUser from './useCases/requestUser'
const requestUser = new RequestUser()

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LoginLayout
          path="/login"
          component={Login}
          requestUser={requestUser}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
