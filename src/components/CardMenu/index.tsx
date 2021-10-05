import { CardMenuProps } from '../../constants/interfaces/CardMenu'

import * as S from './styles'

export const CardMenu = ({
  price,
  titleBackground,
  img,
  onClick
}: CardMenuProps) => (
  <S.Wrapper onClick={onClick}>
    <S.Box>
      <S.Title>Apartir de</S.Title>
      <S.Price>{price}</S.Price>
    </S.Box>
    <S.Img src={img} alt={titleBackground} />
    <S.TitleBackground>{titleBackground}</S.TitleBackground>
  </S.Wrapper>
)
