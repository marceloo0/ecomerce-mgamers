import Router from 'next/router'

import { useCart } from '../../hooks/useCart'

import * as S from './styles'

export const CartIcon = () => {
  const { totalItems } = useCart()

  const handleCart = () => {
    Router.push('/cartlist')
  }

  return (
    <S.Wrapper onClick={handleCart}>
      {totalItems > 0 && <S.Badge aria-label="Items">{totalItems}</S.Badge>}
      <S.Icon aria-label="Shopify" />
    </S.Wrapper>
  )
}
