import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Footer />)

    // expect(screen.getByRole('default', { name: /Footer/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
