import { Story, Meta } from '@storybook/react/types-6-0'
import { CartItem } from '.'
import { Stock } from '../../constants/interfaces/Products'

export default {
  title: 'CartItem',
  component: CartItem,
  argTypes: {
    id: {
      type: 'number'
    },
    img: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    quantity: {
      type: 'number'
    },
    price: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<Stock> = (args) => <CartItem {...args} />

Default.args = {
  img: '/img/products/mouseSteels.svg',
  title: 'Mouse Gamer Razer Deathadder V2',
  quantity: 2,
  price: 560
}
