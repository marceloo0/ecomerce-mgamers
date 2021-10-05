import { Story, Meta } from '@storybook/react/types-6-0'
import { Header } from '.'
import { HeaderProps } from '~/constants/interfaces/Header'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    user: {
      default: true
    }
  }
} as Meta

export const Default: Story<HeaderProps> = () => <Header />
export const WithUser: Story<HeaderProps> = () => <Header />
