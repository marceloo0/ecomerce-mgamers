import { useAuth, useCart } from '../../hooks'

import { Avatar, CartIcon, Logo } from '../../components/index'
import { HeaderProps } from '../../constants/interfaces/Header'

import * as S from './styles'

export const Header = ({ login = false, setShowMenu }: HeaderProps) => {
  const { user } = useAuth()
  const { openModal } = useCart()

  return (
    <S.Wrapper>
      <Logo />
      {!login && (
        <S.Flex>
          {user ? (
            <S.BoxUser>
              <S.FlexAvatar>
                <Avatar />
                <S.Divider />
                <CartIcon />
              </S.FlexAvatar>
              <button
                onClick={setShowMenu}
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <S.MenuIcon />
              </button>
            </S.BoxUser>
          ) : (
            <>
              <S.Box>
                <S.Text>Ola, Visitante</S.Text>
                <S.Description onClick={openModal}>
                  Faça seu login
                </S.Description>
              </S.Box>
              <button
                onClick={setShowMenu}
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <S.MenuIcon />
              </button>
            </>
          )}
        </S.Flex>
      )}
    </S.Wrapper>
  )
}
