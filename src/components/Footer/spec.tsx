import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Footer } from '.'

jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth() {
      return {
        user: {
          id: '1234',
          name: 'marcelo',
          avatar: '',
          email: 'marcelo@marcelo.com'
        }
      }
    }
  }
})

describe('<Footer />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByLabelText(/finaliza/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
