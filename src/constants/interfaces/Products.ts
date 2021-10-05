export interface ProductsProps {
  id: number
  img: string
  price: number
  promotion: number
  title: string
  titleBackground: string
}
export interface Stock extends ProductsProps {
  quantity: number
}
export interface ButtonProductProps extends Stock {
  handleNextSlide: () => void
  handlePrevSlide: () => void
}
export interface ProductsItemProps extends ButtonProductProps {
  item: Stock
}
export interface ItemProductProps extends Stock {
  item: Stock
}
