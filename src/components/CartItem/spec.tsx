import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { props } from '../../constants/interfaces/CartProduct'
import items from './mock'

import { CartItem } from '.'

describe('<CartItem />', () => {
  it('should render quantity 1', () => {
    const { container } = renderWithTheme(<CartItem {...items} quantity={1} />)

    expect(screen.getByText('R$ 109,00')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: items.img })).toHaveAttribute(
      'src',
      items.img
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render quantity 2 or >', () => {
    const { container } = renderWithTheme(<CartItem {...items} quantity={3} />)

    expect(screen.getByText('R$ 109,00')).toBeInTheDocument()

    expect(screen.getByText(/3/i)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: items.img })).toHaveAttribute(
      'src',
      items.img
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
