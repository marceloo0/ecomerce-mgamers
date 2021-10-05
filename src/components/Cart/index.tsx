import Router from 'next/router'
import { useCart } from '../../hooks/index'

import {
  Button,
  Header,
  CartItem,
  Footer,
  TitleBackground
} from '../../components/index'

import * as S from './styles'

export const Cart = () => {
  const { carts } = useCart()

  const handleAdicione = () => {
    Router.push('/')
  }

  return (
    <S.Wrapper>
      <Header />
      <S.BoxTitle>
        <TitleBackground title="Seu Carrinho" />
      </S.BoxTitle>
      <S.Content>
        {carts.length > 0 ? (
          carts.map((item) => (
            <>
              <CartItem
                key={item.id}
                img={item.img}
                title={item.title}
                quantity={item.quantity}
                id={item.id}
                promotion={item.promotion}
                price={item.price}
                titleBackground={item.titleBackground}
              />
            </>
          ))
        ) : (
          <S.Empty>
            <S.Title>Seu carrinho está vazio adicione alguns produtos.</S.Title>
            <Button onClick={handleAdicione} size="large">
              Adicione
            </Button>
          </S.Empty>
        )}
        {carts.length > 0 && (
          <S.FooterWapper>
            <Footer />
          </S.FooterWapper>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
