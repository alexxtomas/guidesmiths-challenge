import { useSelector } from 'react-redux'
import { RootState } from './app/store'
const App = (): JSX.Element => {
  const phonesState = useSelector((state: RootState) => state.phones)
  console.log(phonesState)
  return (
    <div></div>
  )
}

export default App
