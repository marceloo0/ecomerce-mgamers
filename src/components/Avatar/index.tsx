import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'

export const Avatar = () => {
  const { user } = useAuth()
  const letra = user?.name.substr(0, 1)

  return (
    <S.Wrapper>
      <S.Title>{letra}</S.Title>
    </S.Wrapper>
  )
}
