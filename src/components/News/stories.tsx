import { Story, Meta } from '@storybook/react/types-6-0'
import { News } from '.'

export default {
  title: 'News',
  component: News,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <News />

Default.args = {
  children: ''
}
