import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { Button, Header, TitleBackground } from '../../components/index'
import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'

export const FormSignIn = () => {
  const { signinGoogle } = useAuth()

  return (
    <S.Wrapper>
      <Header login />
      <S.BoxTitle>
        <TitleBackground title="Login" />
      </S.BoxTitle>
      <S.Box>
        <S.Title>Escolha o que melhor lhe atende</S.Title>
        <Button icon={<FcGoogle size={36} />} onClick={signinGoogle}>
          Acesse com conta Google
        </Button>
        <Button icon={<FaGithub size={36} />} onClick={signinGoogle}>
          Acesse com conta GitHub
        </Button>
      </S.Box>
    </S.Wrapper>
  )
}
