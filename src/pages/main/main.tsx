import React, { useEffect, useState } from 'react'
import { IGetUser } from '../../domain/service/getUser'
import { User } from '../../domain/entities/user'
import LocalStorageHelper from '../../utils/localStorageHelper'

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
      <div>
        <img src={user.avatar} alt={user.name} />
        <h1>{user.name}</h1>
        <span>{user.email}</span>
        <span>{user.location}</span>

        <div>
          <div>{user.countFollowers ? user.countFollowers : 0}</div>
          <div>{user.countFollowing ? user.countFollowing : 0}</div>
          <div>{user.countRepositories ? user.countRepositories : 0}</div>
        </div>
        <div>{user.bio}</div>
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
