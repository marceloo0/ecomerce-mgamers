import { Story, Meta } from '@storybook/react/types-6-0'
import { Menu } from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <Menu />

Default.args = {
  children: ''
}
