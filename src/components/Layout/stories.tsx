import { Story, Meta } from '@storybook/react/types-6-0'
import { Layout } from '.'

export default {
  title: 'Layout',
  component: Layout,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <Layout />

Default.args = {
  children: ''
}
