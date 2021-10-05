import React from 'react'

import { AuthContextProvider } from './AuthContext'
import { CartContextProvider } from './CartContext'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </AuthContextProvider>
  )
}
