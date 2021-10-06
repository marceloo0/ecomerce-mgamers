import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Avatar } from '.'

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

describe('<Avatar />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Avatar />)

    expect(screen.getByText(/Sair/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
