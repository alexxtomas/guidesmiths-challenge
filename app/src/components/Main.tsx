import { Route, Switch } from 'wouter'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Phone from '../pages/Phone'

const Main = (): JSX.Element => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} />
        <Route
          path="/phone/:id"
          component={({ params }) => <Phone id={params.id} />}
        />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default Main
