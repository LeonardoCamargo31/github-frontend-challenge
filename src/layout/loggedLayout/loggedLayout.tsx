import { Route, Redirect } from 'react-router-dom'
import LocalStorageHelper from '../../utils/localStorageHelper'
import Navbar from '../../components/navbar/navbar'
import Menu from '../../components/menu/menu'

const LoggedLayout = ({ children }: any) => {
  const data = LocalStorageHelper.getUserLogged()

  return (
    <div>
      <Menu username={data.user.username} />
      {children}
      <Navbar />
    </div>
  )
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
