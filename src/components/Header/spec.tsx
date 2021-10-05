import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { Header } from '.'

describe('<Header />', () => {
  it('should render with user', () => {
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

    const { container } = renderWithTheme(<Header />)

    expect(screen.getByRole('img', { name: 'logo' })).toHaveAttribute(
      'alt',
      'logo'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without user', async () => {
    const { container } = renderWithTheme(<Header />)

    expect(screen.getByText(/Faça seu login/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
