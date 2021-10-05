import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { FormSignIn } from '.'

describe('<FormSignIn />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/login/i)).toBeInTheDocument()
    expect(screen.getByText(/Acesse com conta Google/i)).toBeInTheDocument()
    expect(screen.getByText(/Acesse com conta GitHub/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
