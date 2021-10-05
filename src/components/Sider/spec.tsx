import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Sider } from '.'

describe('<Sider />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(<Sider />)

    expect(screen.getByLabelText(/arrow back/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
