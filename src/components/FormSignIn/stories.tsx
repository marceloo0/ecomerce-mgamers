import { Story, Meta } from '@storybook/react/types-6-0'
import { FormSignIn } from '.'

export default {
  title: 'FormSignIn',
  component: FormSignIn,
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = () => <FormSignIn />

Default.args = {
  children: ''
}
