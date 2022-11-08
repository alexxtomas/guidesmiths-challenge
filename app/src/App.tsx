import { useEffect } from 'react'
const App = (): JSX.Element => {
  useEffect(() => {
    fetch('http://localhost:3000/phonebook')
      .then(async res => await res.json())
      .then(json => console.log(json))
      .catch(e => console.error(e))
  }, [])
  return (
    <div />
  )
}

export default App
