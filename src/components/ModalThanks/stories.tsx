import { Story, Meta } from '@storybook/react/types-6-0'
import { ModalThanks } from '.'

export default {
  title: 'ModalThanks',
  component: ModalThanks,
  argTypes: {}
} as Meta

export const Login: Story = () => <ModalThanks />
