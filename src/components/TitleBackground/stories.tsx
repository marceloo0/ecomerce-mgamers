import { Story, Meta } from '@storybook/react/types-6-0'
import { TitleBackground } from '.'
import { TitleBackgroundProps } from '~/constants/interfaces/TitleBackground'
export default {
  title: 'TitleBackground',
  component: TitleBackground,
  argTypes: {
    title: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TitleBackgroundProps> = (args) => (
  <TitleBackground {...args} />
)

Default.args = {
  title: 'mouses'
}
