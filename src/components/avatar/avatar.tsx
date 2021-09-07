type Props = {
  avatar: string
  name: string
}

const Avatar: React.FC<Props> = ({ avatar, name }) => (
  <div className="c-avatar">
    <img src={avatar} alt={name} />
  </div>
)

export default Avatar
