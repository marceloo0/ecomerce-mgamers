import { Button } from '../../components'
import { useAuth, useCart } from '../../hooks/index'
import formatedValue from '../../utils/formatedValue'

import * as S from './styles'

export const Footer = () => {
  const { user } = useAuth()
  const { total, openModal } = useCart()

  return (
    <S.Flex>
      {user && (
        <S.FlexUser>
          <S.TotalText>Valor total:</S.TotalText>
          <S.Title>{formatedValue(total)}</S.Title>
          <div style={{ padding: 24 }}>
            <Button aria-label="finaliza" onClick={openModal} size="medium">
              Finalizar compra
            </Button>
          </div>
        </S.FlexUser>
      )}
    </S.Flex>
  )
}
