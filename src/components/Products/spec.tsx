import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Products } from '.'

describe('<Products />', () => {
  it('should render default', () => {
    renderWithTheme(<Products type="mouses" />)

    expect(screen.getByLabelText(/products/i)).toBeInTheDocument()
  })
})
