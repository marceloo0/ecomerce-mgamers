import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Products from '../../pages/products/[slug]'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
        query: {
          slug: 'mouses'
        }
      }
    }
  }
})

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<Products />)

    expect(screen.getByLabelText(/dashboard/i)).toBeInTheDocument()
  })
})
