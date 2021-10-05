import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Menu } from '.'

const handleShowMenu = jest.fn()

describe('<Menu />', () => {
  it('should render default', () => {
    renderWithTheme(<Menu handleShowMenu={handleShowMenu} />)

    expect(screen.getByLabelText(/menu/i)).toBeInTheDocument()
  })
})
