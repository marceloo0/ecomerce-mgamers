import { Story, Meta } from '@storybook/react/types-6-0'
import { ModalLogin } from '.'

export default {
  title: 'ModalLogin',
  component: ModalLogin,
  argTypes: {}
} as Meta

export const Login: Story = () => <ModalLogin />
