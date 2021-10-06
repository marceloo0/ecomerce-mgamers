import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { ModalLogin } from '.'

jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth() {
      return {
        signinGoogle: jest.fn(),
        signinGitHub: jest.fn()
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

describe('<ModalLogin />', () => {
  it('should render to login', () => {
    const { container } = renderWithTheme(<ModalLogin />)

    expect(screen.getByText(/Faça seu login/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
