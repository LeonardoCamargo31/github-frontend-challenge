import { FaSignOutAlt } from 'react-icons/fa'
import { Grid } from 'react-flexbox-grid'

const Menu = () => (
  <Grid>
    <div className="c-menu">
      <div className="c-menu__username">#nome.cabra</div>

      <div className="c-menu__logout">
        Sair
        <span>
          <FaSignOutAlt />
        </span>
      </div>
    </div>
  </Grid>
)

export default Menu
