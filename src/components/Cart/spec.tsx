import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import items from './mock'

import { Cart } from '.'

describe('<Cart />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Cart />)

    expect(screen.getByRole('default', { name: /Cart/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
