import { useEffect, useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

import { ProductsProps } from '../../constants/interfaces/Products'
import { useCart } from '../../hooks/index'
import { Sider, ProductItem } from '../../components/index'

import * as S from './styles'

interface ProductItemsProps {
  type: string
}

export const Products = ({ type }: ProductItemsProps) => {
  const [current, setCurrent] = useState(0)
  const [productsItems, setProductsItems] = useState<ProductsProps[]>([])
  const { products } = useCart()
  const length = type === 'products' ? products.length : productsItems.length

  console.log(type)
  useEffect(() => {
    const handleMenu = (type: string) => {
      const item = products.filter((item) => item.titleBackground === type)
      setProductsItems(item)
    }
    handleMenu(type)
  }, [products, type])

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(products) || products.length <= 0) {
    return null
  }

  return (
    <S.Wrapper>
      <S.Flex>
        <S.SiderText>
          <S.Title>Bem-vindo a sua loja virtual MgamerS</S.Title>
          <S.BoxIcons>
            <a>
              <IoLogoGithub size={32} color="white" />
            </a>
            <a>
              <IoLogoLinkedin size={32} color="#00A3FF" />
            </a>
          </S.BoxIcons>
        </S.SiderText>
        {type === 'products' ? (
          <>
            {products.map((item, index) => (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <ProductItem
                    item={item}
                    handleNextSlide={handleNextSlide}
                    handlePrevSlide={handlePrevSlide}
                  />
                )}
              </div>
            ))}
          </>
        ) : (
          <>
            {productsItems.map((item, index) => (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <ProductItem
                    item={item}
                    handleNextSlide={handleNextSlide}
                    handlePrevSlide={handlePrevSlide}
                  />
                )}
              </div>
            ))}
          </>
        )}
        <S.SiderButtons>
          <Sider
            handleNextSlide={handleNextSlide}
            handlePrevSlide={handlePrevSlide}
          />
        </S.SiderButtons>
      </S.Flex>
    </S.Wrapper>
  )
}
