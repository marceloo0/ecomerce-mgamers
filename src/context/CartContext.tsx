import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'
import Router from 'next/router'
import { ProductsProps, Stock } from '../constants/interfaces/Products'
import { useAuth } from '../hooks/useAuth'

interface CartProviderProps {
  children: ReactNode
}

export const CartContextDefaultValues = {
  carts: [],
  totalItems: 0,
  total: 0,
  increment: () => null,
  decrement: () => null,
  addProduct: () => null,
  removeProduct: () => null,
  products: []
}

interface CartContextData {
  carts: Stock[]
  increment(id: number): void
  decrement(id: number): void
  addProduct: (productId: ProductsProps) => void
  removeProduct: (productId: number) => void
  total: number
  totalItems: number
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({
  children
}: CartProviderProps): JSX.Element {
  const [carts, setCarts] = useState<Stock[]>([])
  const [total, setTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const { user } = useAuth()

  useEffect(() => {
    const totalParcial = Object.values(carts).reduce((acc, cart) => {
      const subTotal = cart.quantity * cart.promotion
      return acc + subTotal
    }, 0)
    setTotal(totalParcial)
  }, [carts])

  useEffect(() => {
    const totalParcial = Object.values(carts).reduce((acc, cart) => {
      return acc + cart.quantity
    }, 0)
    setTotalItems(totalParcial)
  }, [carts])

  const addProduct = useCallback(
    (cart: ProductsProps) => {
      if (user) {
        const productAlreadyInCart = carts.find(
          (product) => product.id === cart.id
        )
        if (productAlreadyInCart) {
          setCarts(
            carts.map((product) =>
              product.id === cart.id
                ? { ...cart, quantity: product.quantity + 1 }
                : product
            )
          )
        } else {
          setCarts([...carts, { ...cart, quantity: 1 }])
        }
      } else {
        Router.push('/signIn')
      }
    },
    [carts, user]
  )

  const increment = useCallback(
    (id: number) => {
      setCarts(
        carts.map((cart) =>
          cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
        )
      )
    },
    [carts]
  )

  const removeProduct = (productId: number) => {
    const productExists = carts.filter(
      (cartProduct) => cartProduct.id === productId
    )
    if (!productExists) {
      console.log('Erro na remoção do produto')
      return
    }
    const updatedCart = carts.filter((cartItem) => cartItem.id !== productId)
    setCarts(updatedCart)
  }

  const decrement = (id: number) => {
    const findProduct = carts.find((cart) => cart.id === id)

    if (!findProduct) return
    if (findProduct.quantity === 1) {
      const newProduct = carts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : cart
      )
      setCarts(newProduct)
      removeProduct(id)
    } else {
      const newProduct = carts.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : cart
      )
      setCarts(newProduct)
    }
  }

  return (
    <CartContext.Provider
      value={{
        carts,
        total,
        totalItems,
        increment,
        decrement,
        addProduct,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
