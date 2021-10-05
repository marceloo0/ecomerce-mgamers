import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Avatar />)

    expect(screen.getByText(/M/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
