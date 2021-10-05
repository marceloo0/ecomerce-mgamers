import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar } from '.'

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <Avatar />

Default.args = {
  children: ''
}
