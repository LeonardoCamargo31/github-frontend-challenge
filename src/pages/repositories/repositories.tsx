import { useEffect, useState } from 'react'
import { IGetRepositoriesService } from '../../domain/service/getRepositories'
import { Repository } from '../../domain/entities/repository'
import LocalStorageHelper from '../../utils/localStorageHelper'
import RepositoryItem from '../../components/repositoryItem/repositoryItem'

type MainProps = {
  getRepositoriesService: IGetRepositoriesService
}

function Repositories({ getRepositoriesService }: MainProps) {
  const [repositories, setRepositories] = useState<Repository[]>()

  useEffect(() => {
    const fetchData = async () => {
      const userLogged = LocalStorageHelper.getUserLogged()
      const response = await getRepositoriesService.handler(userLogged.user.id)

      if (!response.success || !response.data) {
        return
      }

      setRepositories(response.data)
    }

    fetchData()
  }, [])

  const renderProfile = (repositories: Repository[]) => {
    return (
      <div className="u-main">
        {repositories.map((repository, id) => {
          return (
            <RepositoryItem
              name={repository.name}
              description={repository.description}
              countStars={repository.countStars}
              isPublic={repository.public}
              key={id}
            />
          )
        })}
      </div>
    )
  }

  if (repositories) {
    return renderProfile(repositories)
  } else {
    return <div>… Carregando</div>
  }
}

export default Repositories
