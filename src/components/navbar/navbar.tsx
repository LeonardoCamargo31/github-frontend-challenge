import { FaHome, FaGithub, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'

const Navbar = () => (
  <div className="c-navbar">
    <Grid className="c-navbar__wrapper">
      <NavLink to="/" exact={true} className="c-navbar__item">
        <span>
          <FaHome />
        </span>
        Home
      </NavLink>

      <NavLink to="/repositories" exact={true} className="c-navbar__item">
        <span>
          <FaGithub />
        </span>
        Repos
      </NavLink>

      <NavLink to="/followers" exact={true} className="c-navbar__item">
        <span>
          <FaUsers />
        </span>
        Seguidores
      </NavLink>

      <NavLink to="/following" exact={true} className="c-navbar__item">
        <span>
          <FaUsers />
        </span>
        Seguindo
      </NavLink>
    </Grid>
  </div>
)

export default Navbar
