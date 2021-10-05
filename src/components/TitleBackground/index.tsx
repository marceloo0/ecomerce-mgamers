import * as S from './styles'
import { TitleBackgroundProps } from '../../constants/interfaces/TitleBackground'

export const TitleBackground = ({ title }: TitleBackgroundProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)
