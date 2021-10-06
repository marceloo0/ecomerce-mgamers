export interface CartProductProps {
  price: string
  promotion: string
  title: string
  img: string
  titleBackground: string
  handleNextSlide: () => void
  handlePrevSlide: () => void
}

export interface CartItemProps extends CartProductProps {
  quantity: number
}

const propsCardTest = {
  price: '109',
  titleBackground: 'teclados',
  img: '/img/mouseMenu.svg'
}

export const props = {
  price: 'R$ 109,00',
  titleBackground: 'teclados',
  img: '/img/products/mouse.svg',
  promotion: 'R$ 89,00',
  title: ''
}
