import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { CartItem } from '.'

const props = {
  id: 1,
  img: '/img/products/mouseRazer.svg',
  price: 180.94,
  promotion: 155.9,
  title: 'Mouse Gamer Razer Deathadder',
  titleBackground: 'MouseS',
  quantity: 0
}

describe('<CartItem />', () => {
  it('should render quantity 1', () => {
    const { container } = renderWithTheme(<CartItem {...props} />)

    expect(
      screen.getByText(/Mouse Gamer Razer Deathadder/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.img })).toHaveAttribute(
      'src',
      props.img
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
