import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { ModalThanks } from '.'

jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth() {
      return {
        signout: jest.fn()
      }
    }
  }
})

jest.mock('../../hooks/useCart', () => {
  return {
    useCart() {
      return {
        modalIsOpen: true,
        closeModal: jest.fn()
      }
    }
  }
})

describe('<ModalThanks />', () => {
  it('should render to thanks', () => {
    const { container } = renderWithTheme(<ModalThanks />)

    expect(screen.getByText(/thanks/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
