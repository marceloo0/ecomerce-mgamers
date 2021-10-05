import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render default', () => {
    renderWithTheme(<Menu handleShowMenu={true} />)

    expect(screen.getByLabelText(/item menu/i)).toBeInTheDocument()
  })
})
