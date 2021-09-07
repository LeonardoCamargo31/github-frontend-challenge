import React from 'react'
import { Route } from 'react-router-dom'

const LoginLayout = ({ children }: any) => {
  return <div>{children}</div>
}

const LoginLayoutRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <LoginLayout>
          <Component {...props} {...rest} />
        </LoginLayout>
      )}
    />
  )
}

export default LoginLayoutRoute
