import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@evelyn-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',

    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et id aperiam. Porro qui, velit recusandae consequatur eveniet voluptatum illo at culpa vitae optio impedit excepturi eos suscipit. Cum, sit.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
