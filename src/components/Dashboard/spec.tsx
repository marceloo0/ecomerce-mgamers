import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Dashboard } from '.'

describe('<Dashboard />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Dashboard type="MouseS" />)

    expect(screen.getByLabelText(/dashboard/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
