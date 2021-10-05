import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { CartNews } from '.'

const props = {
  item: {
    id: 1,
    img: '/img/products/mouseRazer.svg',
    price: 180.94,
    promotion: 155.9,
    title: 'Mouse Gamer Razer Deathadder',
    titleBackground: 'MouseS',
    quantity: 0
  }
}

describe('<CartNews />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<CartNews {...props} />)

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
