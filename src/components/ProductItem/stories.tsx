import { Story, Meta } from '@storybook/react/types-6-0'
import { ProductItem } from '.'
import { ItemProductProps } from '../../constants/interfaces/Products'

export default {
  title: 'ProductItem',
  component: ProductItem,
  argTypes: {
    item: {
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
    }
  }
} as Meta

export const Default: Story<ItemProductProps> = (args) => (
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
