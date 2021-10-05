import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { TitleBackground } from '.'

describe('<TitleBackground />', () => {
  it('should render default', () => {
    renderWithTheme(<TitleBackground title="mouses" />)

    expect(screen.getByText(/mouses/i)).toBeInTheDocument()
  })
})
