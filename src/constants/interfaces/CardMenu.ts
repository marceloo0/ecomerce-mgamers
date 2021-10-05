export interface CardMenuImgStyle {
  sizeImg: 'small' | 'medium' | 'large'
}

export interface CardMenuProps {
  img: string
  price: string
  titleBackground: string
  onClick?: () => void
}
