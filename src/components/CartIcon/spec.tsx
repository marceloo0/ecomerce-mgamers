import { CartContextDefaultValues } from '../../context/CartContext'
import { screen, render } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import api from '../../services/api'
import { CartIcon } from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopify/i)).toBeInTheDocument()
    // expect(screen.queryByLabelText(/items cart/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      totalItems: 3
    }
    render(<CartIcon />, { cartProviderProps })

    expect(screen.getByLabelText(/items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })
})
