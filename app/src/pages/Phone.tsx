import Loading from '../components/Loading'
import { usePhones } from '../hooks/usePhones'

interface Param {
  id: string
}
const Phone = ({ id }: Param) => {
  const { error, loading, phoneState } = usePhones(+id)

  if (loading) return <Loading />
  if (error) return <div>Error</div>


  return (
    <section className='phoneDetails-container'>
      <h2>{phoneState?.manufacturer} {phoneState?.name}</h2>
      <img className='' src={`/phonesImages/${phoneState?.imageFileName}`} alt={`${phoneState?.name} image`} />
      <p>${phoneState?.price}</p>
      <p className='description'>{phoneState?.description}</p>
      <div className='specifications'>
        <h3>Specifications</h3>
        <div className='specifications-container'>
          <div>
            <p>Color {phoneState?.color}</p>
            <p>Screen {phoneState?.screen}</p>
          </div>
          <div>
            <p>Processor {phoneState?.processor}</p>
            <p>{phoneState?.ram}GB RAM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Phone