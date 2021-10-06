import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Products } from '.'

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

describe('<Products />', () => {
  it('should render default', () => {
    renderWithTheme(<Products type="products" />)

    expect(screen.getByLabelText(/products/i)).toBeInTheDocument()
  })
})
