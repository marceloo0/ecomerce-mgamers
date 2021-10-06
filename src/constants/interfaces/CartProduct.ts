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
