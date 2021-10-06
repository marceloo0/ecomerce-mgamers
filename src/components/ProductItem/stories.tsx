import { Story, Meta } from '@storybook/react/types-6-0'
import { ProductItem } from '.'
import { ProductsItemProps } from '../../constants/interfaces/Products'

const current = 0

export default {
  title: 'ProductItem',
  component: ProductItem,
  argTypes: {
    item: {
      id: {
        type: 'number'
      },
      title: {
        type: 'string'
      },
      price: {
        type: 'number'
      },
      promotion: {
        type: 'number'
      },
      quantity: {
        type: 'number'
      },
      img: {
        type: 'string'
      },
      titleBackground: {
        type: 'string'
      }
    },
    handlePrevSlide: () => {
      current === length - 1 ? 0 : current - 1
    },
    handleNextSlide: () => {
      current === length - 1 ? 0 : current + 1
    }
  }
} as Meta

export const Default: Story<ProductsItemProps> = (args) => (
  <ProductItem {...args} />
)

Default.args = {
  item: {
    id: 1,
    price: 890,
    promotion: 780,
    title: 'Headset Gamer Logitech G432 7.1',
    img: '/img/products/mouseRazer.svg',
    titleBackground: 'MouseS',
    quantity: 2
  }
}
