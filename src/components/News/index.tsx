import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Stock } from '../../constants/interfaces/Products'

import { PRODUCTS } from '../../constants/api/products'

import { CartNews, TitleBackground } from '../../components/index'

import * as S from './styles'

export const News = () => {
  const [newProducts, setNewProducts] = useState<Stock[]>([])

  useEffect(() => {
    api.get(PRODUCTS).then((response) => {
      setNewProducts(response.data?.news)
    })
  }, [])

  return (
    <S.Wrapper>
      <S.BoxTitle>
        <TitleBackground title="NovidadeS" />
      </S.BoxTitle>
      <S.Flex>
        <S.BoxNews>
          {newProducts.map((item, index) => (
            <CartNews key={index} item={item} />
          ))}
        </S.BoxNews>
      </S.Flex>
    </S.Wrapper>
  )
}
