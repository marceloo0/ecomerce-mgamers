import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { CartIcon } from '.'

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

jest.mock('../../hooks/useCart', () => {
  return {
    useCart() {
      return {
        totalItems: 3
      }
    }
  }
})

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopify/i)).toBeInTheDocument()
  })

  it('should render with badge', () => {
    const { container } = renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
