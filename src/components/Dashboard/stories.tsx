import { Story, Meta } from '@storybook/react/types-6-0'
import { Dashboard } from '.'

export default {
  title: 'Dashboard',
  component: Dashboard,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <Dashboard type="mouses" />

Default.args = {
  children: ''
}
