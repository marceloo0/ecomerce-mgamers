import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import SignIn from '../../pages/signIn'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<SignIn />)

    expect(screen.getByText(/Acesse com conta Google/i)).toBeInTheDocument()
  })
})
