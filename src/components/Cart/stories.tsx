import { Story, Meta } from '@storybook/react/types-6-0'
import { Cart } from '.'

export default {
  title: 'Cart',
  component: Cart,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <Cart />

Default.args = {
  children: ''
}
