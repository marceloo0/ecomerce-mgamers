import { renderHook } from '@testing-library/react-hooks'
import { AuthContextProvider } from '../context/AuthContext'
import { useAuth } from './useAuth'

describe('Auth hook', () => {
  it('should be able to sing google', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthContextProvider
    })
    result.current.signinGoogle()
  })
})
