import { useAuth, useCart } from '../../hooks'
import { Button } from '../Button'

import * as S from './styles'

export const ModalThanks = () => {
  const { signout } = useAuth()
  const { modalIsOpen, closeModal } = useCart()

  const handleFinalize = () => {
    signout()
    closeModal()
  }

  return (
    <S.Wrapper>
      <S.ModalWrapper
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <S.Container aria-label="thanks">
          <S.Title>Fique a ventade para continuar comprando</S.Title>
          <S.Close onClick={closeModal}>X</S.Close>
          <S.Buttons>
            <Button size="large" onClick={handleFinalize}>
              Muito obrigado
            </Button>
          </S.Buttons>
        </S.Container>
      </S.ModalWrapper>
    </S.Wrapper>
  )
}
