import { Story, Meta } from '@storybook/react/types-6-0'
import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <Logo />

Default.args = {
  children: ''
}
