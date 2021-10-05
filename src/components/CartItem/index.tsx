import { ImPlus, ImMinus } from 'react-icons/im'
import { Stock } from '../../constants/interfaces/Products'
import { useCart } from '../../hooks/useCart'
import formatedPrice from '../../utils/formatedValue'

import { Button } from '../Button'

import * as S from './styles'

export const CartItem = ({ img, title, quantity, id, promotion }: Stock) => {
  const { decrement, increment } = useCart()

  const handleDecrement = (id: number) => {
    decrement(id)
  }
  const handleIncrement = (id: number) => {
    increment(id)
  }

  return (
    <S.Wrapper>
      <S.Flex>
        <S.Box>
          <S.Img src={img} alt={img} />
        </S.Box>
        <S.Box>
          <S.Title>{title}</S.Title>
        </S.Box>
        <S.Flex>
          <S.Box>
            <S.Price>{formatedPrice(promotion)}</S.Price>
            {quantity > 1 ? (
              <S.Flex>
                <S.Quantity>{quantity}</S.Quantity>
                <S.Quantity>{formatedPrice(promotion * quantity)}</S.Quantity>
              </S.Flex>
            ) : null}
          </S.Box>
          <S.Box style={{ marginLeft: 24 }}>
            <Button
              icon={<ImPlus />}
              size="small"
              onClick={() => handleIncrement(id)}
            />
            <Button
              icon={<ImMinus />}
              size="small"
              onClick={() => handleDecrement(id)}
            />
          </S.Box>
        </S.Flex>
      </S.Flex>
      <S.Divider />
    </S.Wrapper>
  )
}
