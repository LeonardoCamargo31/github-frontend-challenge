import { FaStar, FaLock, FaUnlock } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Grid } from 'react-flexbox-grid'

type Props = {
  name: string
  description: string
  countStars: string
  isPublic: boolean
}

const RepositoryItem: React.FC<Props> = ({
  name,
  description,
  countStars,
  isPublic
}) => (
  <div className="c-repository">
    <Grid>
      <h3 className="u-header-title">{name}</h3>
      <p>{description}</p>
      <div className="c-repository__footer">
        <div className="c-repository__footer__star">
          <FaStar />
          <span>{countStars}</span>
        </div>

        {isPublic ? (
          <div className="c-repository__footer__lock c-repository__footer__lock--public">
            <FaUnlock />
          </div>
        ) : (
          <div className="c-repository__footer__lock c-repository__footer__lock--private">
            <FaLock />
          </div>
        )}
      </div>
    </Grid>
  </div>
)

export default RepositoryItem
