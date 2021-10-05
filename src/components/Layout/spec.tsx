import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Layout from '.'

describe('<Layout />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Layout />)

    expect(screen.getByRole('default', { name: /Layout/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})