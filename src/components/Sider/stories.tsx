import { Story, Meta } from '@storybook/react/types-6-0'
import { Sider } from '.'
import { SiderProps } from '../../constants/interfaces/Sider'

export default {
  title: 'Sider',
  component: Sider,
  argTypes: {
    title: {
      type: 'string'
    },
    location: {
      type: 'string'
    }
  }
} as Meta

export const DefaultLeft: Story<SiderProps> = (args) => <Sider {...args} />

DefaultLeft.args = {}
