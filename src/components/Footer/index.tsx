import { Avatar, Button, CartIcon } from '../../components'
import { useAuth, useCart } from '../../hooks/index'
import formatedValue from '../../utils/formatedValue'

import * as S from './styles'

export const Footer = () => {
  const { user } = useAuth()
  const { total } = useCart()

  return (
    <S.Flex>
      {user && (
        <S.FlexUser>
          <S.BoxUser>
            <Avatar />
            <S.Divider />
            <CartIcon />
          </S.BoxUser>
          <S.TotalText>Valor total:</S.TotalText>
          <S.Title>{formatedValue(total)}</S.Title>
          <div style={{ padding: 24 }}>
            <Button onClick={() => {}} size="large" aria-label="finaliza">
              Finalizar compra
            </Button>
          </div>
        </S.FlexUser>
      )}
    </S.Flex>
  )
}
