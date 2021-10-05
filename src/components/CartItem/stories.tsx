import { Story, Meta } from '@storybook/react/types-6-0'
import { CartItem } from '.'
import { CartItemProps } from '~/constants/interfaces/CartProduct'
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

export const Default: Story<CartItemProps> = (args) => <CartItem {...args} />

Default.args = {
  img: '/img/products/mouseSteels.svg',
  title: 'Mouse Gamer Razer Deathadder V2',
  quantity: 2,
  price: 'R$ 560,00'
}
