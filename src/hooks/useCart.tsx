import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart() {
  const value = useContext(CartContext)

  return value
}
