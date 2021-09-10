import { Grid } from 'react-flexbox-grid'

type Props = {
  avatar: string
  name: string
  email: string
  location: string
  countFollowers: string | undefined
  countFollowing: string | undefined
  countRepositories: string | undefined
  bio: string
}

const Avatar: React.FC<Props> = ({
  avatar,
  name,
  email,
  location,
  countFollowers = 0,
  countFollowing = 0,
  countRepositories = 0,
  bio
}) => (
  <div className="c-profile">
    <Grid>
      <div className="c-profile__avatar">
        <img src={avatar} alt={name} />
      </div>

      <h1 className="u-header-title">{name}</h1>

      <ul className="c-profile__list">
        <li>{email}</li>
        <li>{location}</li>
      </ul>
    </Grid>

    <div className="c-profile__stats">
      <div className="c-profile__stats__item">
        <strong>{countFollowers}</strong>
        Seguidores
      </div>

      <div className="c-profile__stats__item">
        <strong>{countFollowing}</strong>
        Seguindo
      </div>

      <div className="c-profile__stats__item">
        <strong>{countRepositories}</strong>
        Repos
      </div>
    </div>

    <Grid>
      <h2 className="u-header-title">Bio</h2>
      <p>{bio}</p>
    </Grid>
  </div>
)

export default Avatar
