import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { CartNews } from '.'

const props = {
  price: '109',
  titleBackground: 'teclados',
  img: '/img/products/mouse.svg',
  promotion: '89',
  title: ''
}

describe('<CartNews />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<CartNews {...props} />)

    expect(screen.getByText('R$ 109,00')).toBeInTheDocument()

    expect(screen.getByText('R$ 89,00')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.img })).toHaveAttribute(
      'src',
      props.img
    )

    // expect(screen.getByText(/teclados/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
