import { screen } from '@testing-library/react'

import App from '~/App'
import { render } from '~/utils/test-utils'

const mockUseRoutes = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useRoutes: () => mockUseRoutes,
}))

test('renders react component', () => {
  render(<App />)
  const divElement = screen.getByText('Login Page')
  expect(divElement).toBeInTheDocument()
})
