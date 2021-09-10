import React, { useState } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { Grid } from 'react-flexbox-grid'
import LocalStorageHelper from '../../utils/localStorageHelper'
import { Redirect } from 'react-router-dom'

type Props = {
  username?: string
}

const Menu: React.FC<Props> = ({ username }) => {
  const [redirect, setRedirect] = useState(false)

  const handlerLogout = () => {
    LocalStorageHelper.removeUserLogged()
    setRedirect(true)
  }

  const renderMenuPrimary = () => (
    <Grid className="c-menu__wrapper c-menu__wrapper--primary">
      <div className="c-menu__username">#{username}</div>

      <button onClick={handlerLogout} className="c-menu__logout">
        Sair
        <span>
          <FaSignOutAlt />
        </span>
      </button>
    </Grid>
  )

  if (redirect) {
    return <Redirect to="/login" />
  } else {
    return <div className="c-menu">{renderMenuPrimary()}</div>
  }
}

export default Menu
