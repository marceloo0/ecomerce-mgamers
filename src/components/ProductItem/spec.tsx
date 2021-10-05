import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { props } from '../../constants/interfaces/CartProduct'
import { ProductItem } from '.'

describe('<ProductItem />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<ProductItem {...props} />)

    expect(screen.getByText('R$ 109,00')).toBeInTheDocument()

    expect(screen.getByText('R$ 89,00')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.img })).toHaveAttribute(
      'src',
      props.img
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
