import { Story, Meta } from '@storybook/react/types-6-0'
import { Products } from '.'

export default {
  title: 'Products',
  component: Products,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <Products type="products" />

Default.args = {
  children: ''
}
