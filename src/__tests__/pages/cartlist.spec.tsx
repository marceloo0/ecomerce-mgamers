import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import CartList from '../../pages/cartlist'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
  })
})
