import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import LocalStorageHelper from '../../utils/localStorageHelper'

const LoggedLayout = ({ children }: any) => {
  return <div>{children}</div>
}

const LoggedLayoutRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        LocalStorageHelper.isAuthenticated() ? (
          <LoggedLayout>
            <Component {...props} {...rest} />
          </LoggedLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default LoggedLayoutRoute
