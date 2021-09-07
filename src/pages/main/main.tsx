import { useEffect, useState } from 'react'
import { IGetUser } from '../../domain/service/getUser'
import { User } from '../../domain/entities/user'
import LocalStorageHelper from '../../utils/localStorageHelper'
import { Grid } from 'react-flexbox-grid'
import Avatar from '../../components/avatar/avatar'
import Menu from '../../components/menu/menu'
import Navbar from '../../components/navbar/navbar'
import Stats from '../../components/stats/stats'

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
        <Menu />
        <Grid>
          <div>
            <Avatar avatar={user.avatar} name={user.name} />

            <h1 className="u-header-title">{user.name}</h1>
            <span>{user.email}</span>
            <span>{user.location}</span>

            <Stats
              countFollowers={user.countFollowers ? user.countFollowers : '0'}
              countFollowing={user.countFollowing ? user.countFollowing : '0'}
              countRepositories={
                user.countRepositories ? user.countRepositories : '0'
              }
            />
            <h2 className="u-header-title">Bio</h2>
            <p>{user.bio}</p>
          </div>
        </Grid>
        <Navbar />
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
