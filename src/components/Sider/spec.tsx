import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Sider } from '.'

const handleNextSlide = jest.fn()
const handlePrevSlide = jest.fn()

describe('<Sider />', () => {
  it('should render default', () => {
    const { container } = renderWithTheme(
      <Sider
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
      />
    )

    expect(screen.getByLabelText(/back/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
