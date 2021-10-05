// import { mocked } from 'ts-jest/utils'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
// import { props } from '../../constants/interfaces/CartProduct'
import { ProductItem } from '.'

jest.mock('../../hooks/useCart.tsx', () => ({
  __esModule: true,
  useCart: jest.fn().mockReturnValue({
    carts: []
  })
}))

const props = {
  item: {
    id: 1,
    img: '/img/products/mouseRazer.svg',
    price: 180.94,
    promotion: 155.9,
    title: 'Mouse Gamer Razer Deathadder',
    titleBackground: 'MouseS',
    quantity: 0
  },
  handlePrevSlide: jest.fn(),
  handleNextSlide: jest.fn()
}

// regular matricula 589 18x489 material 1600 escola invictus
// indicado matricula 249 18x219 material 700 6x750 10x850

describe('<ProductItem />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<ProductItem {...props} />)

    expect(
      screen.getByText(/Mouse Gamer Razer Deathadder/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.item.img })).toHaveAttribute(
      'src',
      props.item.img
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
