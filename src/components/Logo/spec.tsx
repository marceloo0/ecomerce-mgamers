import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
