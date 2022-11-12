import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { afterEach, describe, expect, it } from 'vitest'
import App from '../App'
import { store } from '../app/store'

const WrappedApp = (): JSX.Element => (
  <Provider store={store}>
    <App />
  </Provider>
)

describe('Home Page', () => {
  afterEach(() => {
    cleanup()
  })
  it('should be a title', async () => {
    render(<WrappedApp />)
    expect(await screen.findByRole('heading')).toHaveTextContent(
      'Phones Catalogue'
    )
  })
  it('should render a loading page', async () => {
    render(<WrappedApp />)
    await waitFor(() => screen.getByTestId('loading'))
  })
})
