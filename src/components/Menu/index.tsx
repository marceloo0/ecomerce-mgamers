import Router from 'next/router'
import { menu } from '../../constants/interfaces/Menu'

import { CardMenu } from '../CardMenu'

import * as S from './styles'

interface MenuProps {
  handleShowMenu: () => void
}

export const Menu = ({ handleShowMenu }: MenuProps) => {
  const handleItem = (type: string) => {
    Router.push(`/products/${[type]}`)
    handleShowMenu()
  }

  return (
    <S.Wrapper>
      <S.BoxGrid>
        {menu.map((item, index) => (
          <CardMenu
            onClick={() => handleItem(item.title)}
            key={index}
            titleBackground={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
      </S.BoxGrid>
    </S.Wrapper>
  )
}
