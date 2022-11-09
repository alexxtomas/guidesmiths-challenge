import { Route } from 'wouter'
import Home from '../pages/Home'
import Phone from '../pages/Phone'

const Main = () => {
  return (
    <main>
      <Route path='/' component={Home} />
      <Route path='/phone/:id' component={({ params }) => <Phone id={params.id} />} />
    </main>
  )
}

export default Main