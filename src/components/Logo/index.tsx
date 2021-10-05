import Router from 'next/router'

import * as S from './styles'

export const Logo = () => {
  const handleHome = () => {
    Router.push('/')
  }

  return (
    <S.Wrapper onClick={handleHome}>
      <S.Img src="/img/logo.svg" alt="logo" role="img" />
    </S.Wrapper>
  )
}
