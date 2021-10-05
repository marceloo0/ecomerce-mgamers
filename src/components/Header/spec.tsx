import { screen, fireEvent, waitFor } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Header } from '.'

jest.mock('next/router', () => {
  return {
    handleLogin() {
      return {
        asPath: '/signIn'
      }
    }
  }
})

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

describe('<Header />', () => {
  it('should render with user', () => {
    const { container } = renderWithTheme(<Header />)

    expect(screen.getByRole('img', { name: 'logo' })).toHaveAttribute(
      'alt',
      'logo'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without user', async () => {
    const { container, getByText } = renderWithTheme(<Header />)

    const link = getByText('faça seu login')

    fireEvent.click(link)

    await waitFor(() => {
      expect(getByText('faça seu login')).toHaveBeenCalledWith('/signIn')
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
