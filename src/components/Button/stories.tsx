import { Story, Meta } from '@storybook/react/types-6-0'
import { FaAdobe } from 'react-icons/fa'
import { Button } from '.'
import { ButtonProps } from '../../constants/interfaces/Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    minimal: {
      control: {
        type: 'boolean'
      }
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Comprar Agora'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Comprar Agora',
  icon: <FaAdobe />
}

export const outChildren: Story<ButtonProps> = (args) => <Button {...args} />

outChildren.args = {
  size: 'large',
  icon: <FaAdobe size={36} />
}
