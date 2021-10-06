import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

import { Button } from '../Button'
import { useAuth, useCart } from '../../hooks'

import * as S from './styles'

export const ModalLogin = () => {
  const { signinGoogle, signinGitHub } = useAuth()
  const { modalIsOpen, closeModal } = useCart()

  const handleSigninGoogle = () => {
    signinGoogle()
    closeModal()
  }

  const handleSigninGitHub = () => {
    signinGitHub()
    closeModal()
  }

  return (
    <S.Wrapper>
      <S.ModalWrapper
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <S.Container aria-label="login">
          <S.Title>Faça seu login</S.Title>
          <S.Close onClick={closeModal}>X</S.Close>
          <S.Buttons>
            <Button
              icon={<FcGoogle size={36} />}
              size="large"
              onClick={handleSigninGoogle}
            >
              Login com Google
            </Button>
            <Button
              icon={<FaGithub size={36} />}
              size="large"
              onClick={handleSigninGitHub}
            >
              Login com GitHub
            </Button>
          </S.Buttons>
        </S.Container>
      </S.ModalWrapper>
    </S.Wrapper>
  )
}
