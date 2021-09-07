type Props = {
  countFollowers: string
  countFollowing: string
  countRepositories: string
}

const Stats: React.FC<Props> = ({
  countFollowers,
  countFollowing,
  countRepositories
}) => (
  <div className="c-stats">
    <div className="c-stats__item">
      <strong>{countFollowers}</strong>
      Seguidores
    </div>

    <div className="c-stats__item">
      <strong>{countFollowing}</strong>
      Seguidores
    </div>

    <div className="c-stats__item">
      <strong>{countRepositories}</strong>
      Repos
    </div>
  </div>
)

export default Stats
