import { Story, Meta } from '@storybook/react/types-6-0'
import { CardMenu } from '.'
import { CardMenuProps } from '~/constants/interfaces/CardMenu'

export default {
  title: 'CardMenu',
  component: CardMenu,
  argTypes: {
    img: {
      type: 'string'
    },
    price: {
      type: 'number'
    },
    titleBackground: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<CardMenuProps> = (args) => <CardMenu {...args} />

Default.args = {
  price: 99,
  img: '/img/menu/headset.svg',
  titleBackground: 'mouses',
  sizeImg: 'small'
}
