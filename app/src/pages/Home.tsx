import { useLocation } from "wouter"
import Loading from "../components/Loading"
import { usePhones } from "../hooks/usePhones"
const Home = () => {
  const { loading, error, phonesState } = usePhones()
  const [location, navigate] = useLocation()

  if (loading) return <Loading />
  if (error) return <div>Error...</div>

  const handleClick = (id: number) => {
    navigate(`/phone/${id}`)
  }

  return (
    <section className="home">
      {
        phonesState?.map(({ id, name, imageFileName }) =>
          <figure onClick={() => handleClick(id)} key={id}>
            <img src={`/phonesImages/${imageFileName}`} />
            <figcaption>{name}</figcaption>
          </figure>
        )
      }
    </section>
  )
}

export default Home