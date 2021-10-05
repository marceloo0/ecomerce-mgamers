import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { props } from '../../constants/interfaces/CartProduct'

import { CardMenu } from '.'

describe('<CardMenu />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<CardMenu {...props} />)

    expect(screen.getByText('R$ 109,00')).toBeInTheDocument()

    expect(screen.getByText(/teclados/i)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: props.titleBackground })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render titleBackground', () => {
    renderWithTheme(
      <CardMenu
        price="R$ 109,00"
        titleBackground="teclados"
        img="/img/mouseMenu.svg"
      />
    )

    expect(screen.getByText(/teclados/i)).toBeInTheDocument()
  })
})
