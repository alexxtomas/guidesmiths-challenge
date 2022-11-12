import { Link } from 'wouter'

const Header = (): JSX.Element => {
  return (
    <header>
      <h1>Phones Catalogue</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  )
}

export default Header
