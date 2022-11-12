import { useLocation } from 'wouter'
import Loading from '../components/Loading'
import { usePhones } from '../hooks/usePhones'

const Home = (): JSX.Element => {
  const { loading, error, state } = usePhones()
  const [, navigate] = useLocation()

  const phonesState = state as Phone[]

  if (loading === true) return <Loading />
  if (error === true) return <div>Error...</div>

  const handleClick = (id: number): void => {
    navigate(`/phone/${id}`)
  }

  return (
    <section className="home">
      {phonesState?.map(({ id, name, imageFileName }) => (
        <figure onClick={() => handleClick(id)} key={id} data-testid="phone">
          <img src={`/phonesImages/${imageFileName}`} />
          <figcaption>{name}</figcaption>
        </figure>
      ))}
    </section>
  )
}

export default Home
