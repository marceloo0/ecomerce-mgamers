import { useState } from 'react'
import { useCart } from '../../hooks'
import { Footer, Header, Menu, News, Products } from '../../components/index'

import * as S from './styles'

interface ProductItemsProps {
  type: string
}

export const Dashboard = ({ type }: ProductItemsProps) => {
  const { carts } = useCart()
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <S.Wrapper aria-label="dashboard">
      <Header setShowMenu={handleShowMenu} />
      {!showMenu ? (
        <>
          {type === 'NovidadeS' ? (
            <News />
          ) : (
            <>
              <Products type={type} />
              {carts?.length >= 1 && <Footer />}
            </>
          )}
        </>
      ) : (
        <S.BoxMenu>
          <Menu handleShowMenu={handleShowMenu} />
        </S.BoxMenu>
      )}
    </S.Wrapper>
  )
}
