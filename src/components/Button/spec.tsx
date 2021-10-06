import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { FaAdobe } from 'react-icons/fa'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Comprar Agora</Button>)

    expect(screen.getByText(/Comprar Agora/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Comprar Agora</Button>)

    expect(screen.getByText(/Comprar Agora/i)).toBeInTheDocument()
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Comprar Agora</Button>)

    expect(screen.getByText(/Comprar Agora/i)).toBeInTheDocument()
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<FaAdobe data-testid="icon" />}>Comprar Agora</Button>
    )

    expect(screen.getByText(/Comprar Agora/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
