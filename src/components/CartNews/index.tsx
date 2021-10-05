import { ImPlus } from 'react-icons/im'
import { useCart } from '../../hooks/useCart'
import { ProductsProps } from '../../constants/interfaces/Products'

import { Button } from '../Button'

import * as S from './styles'

export interface CartNewsProps {
  item: ProductsProps
}

export const CartNews = ({ item }: CartNewsProps) => {
  const { addProduct } = useCart()

  return (
    <S.Wrapper>
      <S.Img src={item.img} alt={item.img} />
      <S.Box>
        <S.Title>{item.title}</S.Title>
        <S.Price>{item.price}</S.Price>
        <S.Promotion>{item.promotion}</S.Promotion>
      </S.Box>
      <S.Flex>
        <Button
          icon={<ImPlus size={24} />}
          size="small"
          onClick={() => addProduct(item)}
        >
          Adicionar
        </Button>
      </S.Flex>
    </S.Wrapper>
  )
}
