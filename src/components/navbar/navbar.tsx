import { FaHome, FaGithub, FaUsers } from 'react-icons/fa'

import { Grid } from 'react-flexbox-grid'

const Navbar = () => (
  <div className="c-navbar">
    <Grid className="c-navbar__wrapper">
      <div className="c-navbar__item">
        <span>
          <FaHome />
        </span>
        Home
      </div>

      <div className="c-navbar__item">
        <span>
          <FaGithub />
        </span>
        Repos
      </div>

      <div className="c-navbar__item">
        <span>
          <FaUsers />
        </span>
        Seguidores
      </div>

      <div className="c-navbar__item">
        <span>
          <FaUsers />
        </span>
        Seguindo
      </div>
    </Grid>
  </div>
)

export default Navbar
