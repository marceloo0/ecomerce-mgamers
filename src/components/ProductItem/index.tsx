import { ImPlus } from 'react-icons/im'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useCart } from '../../hooks/index'
import formatedPrice from '../../utils/formatedValue'
import { ProductsProps } from '../../constants/interfaces/Products'

import { Button, TitleBackground } from '../../components/index'

import * as S from './styles'

interface ProductItemProps {
  item: ProductsProps
  handleNextSlide: () => void
  handlePrevSlide: () => void
}

export const ProductItem = ({
  item,
  handlePrevSlide,
  handleNextSlide
}: ProductItemProps) => {
  const { addProduct } = useCart()
  return (
    <S.Wrapper>
      <S.BoxTitle>
        <TitleBackground title={item.titleBackground} />
      </S.BoxTitle>
      <S.Box>
        <S.BoxImg>
          <S.Img src={item.img} alt={item.img} />
        </S.BoxImg>
        <S.Section>
          <S.Title>{item.title}</S.Title>
          <S.Price>{formatedPrice(item.price)}</S.Price>
          <S.Promotion>{formatedPrice(item.promotion)}</S.Promotion>
          <S.ButtonContent>
            <Button
              icon={<ImPlus size={24} />}
              onClick={() => addProduct(item)}
            >
              Adicionar ao Carrinho
            </Button>
          </S.ButtonContent>
          <S.Buttons>
            <Button
              icon={<IoIosArrowBack size={36} />}
              size="small"
              onClick={handlePrevSlide}
            />
            <Button
              icon={<ImPlus size={24} />}
              onClick={() => addProduct(item)}
            >
              Adicionar ao Carrinho
            </Button>
            <Button
              icon={<IoIosArrowForward size={36} />}
              size="small"
              onClick={handleNextSlide}
            />
          </S.Buttons>
        </S.Section>
      </S.Box>
    </S.Wrapper>
  )
}
