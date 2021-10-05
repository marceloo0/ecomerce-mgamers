import { Story, Meta } from '@storybook/react/types-6-0'
import { CartNews, CartNewsProps } from '.'

export default {
  title: 'CartNews',
  component: CartNews,
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
      img: {
        type: 'string'
      },
      titleBackground: {
        type: 'string'
      }
    }
  }
} as Meta

export const Default: Story<CartNewsProps> = (args) => <CartNews {...args} />

Default.args = {
  item: {
    id: 1,
    price: 890,
    promotion: 780,
    title: 'Headset Gamer Logitech G432 7.1',
    img: '/img/products/mouseRazer.svg',
    titleBackground: 'MouseS'
  }
}
