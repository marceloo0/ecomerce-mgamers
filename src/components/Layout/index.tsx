import * as S from './styles'
import { Header } from '../Header'
import { ProductItem } from '../ProductItem'

export const Layout = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <ProductItem />
      </S.Container>
    </S.Wrapper>
  )
}
