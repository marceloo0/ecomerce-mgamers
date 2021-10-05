import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { News } from '.'

describe('<News />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<News />)

    expect(screen.getByRole('default', { name: /News/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
