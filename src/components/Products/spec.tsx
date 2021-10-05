import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Products } from '.'

describe('<Products />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Products type="products" />)

    expect(
      screen.getByRole('default', { name: /Products/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
