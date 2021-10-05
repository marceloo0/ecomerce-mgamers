import { useState } from 'react'

import { Header, Menu, News, Products } from '../../components/index'

import * as S from './styles'

interface ProductItemsProps {
  type: string
}

export const Dashboard = ({ type }: ProductItemsProps) => {
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
