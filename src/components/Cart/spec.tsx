import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Cart } from '.'

jest.mock('../../hooks/useCart.tsx', () => ({
  __esModule: true,
  useCart: jest.fn().mockReturnValue({
    carts: [
      {
        id: 1,
        img: '/img/products/mouseRazer.svg',
        price: 180.94,
        promotion: 155.9,
        title: 'Mouse Gamer Razer Deathadder',
        titleBackground: 'MouseS',
        quantity: 0
      },
      {
        id: 2,
        img: '/img/products/headsetBlue.svg',
        price: 548,
        promotion: 488.9,
        title: 'Headset Gamer Logitech G432 7.1 Dolby Surround',
        titleBackground: 'HeadseatS',
        quantity: 0
      }
    ]
  })
}))

describe('<Cart />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Cart />)

    expect(
      screen.getByText(/Mouse Gamer Razer Deathadder/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
