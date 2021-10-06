import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Home from '../../pages'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/dashboard/i)).toBeInTheDocument()
  })
})
