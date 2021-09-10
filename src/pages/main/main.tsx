import { useEffect, useState } from 'react'
import { IGetUser } from '../../domain/service/getUser'
import { User } from '../../domain/entities/user'
import LocalStorageHelper from '../../utils/localStorageHelper'
import Profile from '../../components/profile/profile'
import Menu from '../../components/menu/menu'

type MainProps = {
  getUserService: IGetUser
}

function Main({ getUserService }: MainProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const fetchData = async () => {
      const userLogged = LocalStorageHelper.getUserLogged()
      const response = await getUserService.handler(userLogged.user.id)

      if (!response.success || !response.data) {
        return
      }

      setUser(response.data)
    }

    fetchData()
  }, [])

  const renderProfile = (user: User) => {
    return (
      <div className="u-main">
        <Profile
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          location={user.location}
          countFollowers={user.countFollowers}
          countFollowing={user.countFollowing}
          countRepositories={user.countRepositories}
          bio={user.bio}
        />
      </div>
    )
  }

  if (user) {
    return renderProfile(user)
  } else {
    return <div>… Carregando</div>
  }
}

export default Main
