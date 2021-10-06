import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'

export const Avatar = () => {
  const { user, signout } = useAuth()

  return (
    <S.Wrapper
      backgroundImg={
        !user?.avatar
          ? 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BC047E692DC768BDD446D83708CBBD5686FA64EE5D5D3D3C3B0A5A788BE1548/scale?width=280&format=png'
          : `${user?.avatar}`
      }
    >
      <S.DropDown>
        <span onClick={signout}>Sair</span>
      </S.DropDown>
    </S.Wrapper>
  )
}
