import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@evelyn-ignite-ui/react'

export default {
  title: 'Data dispplay/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/evelynhelena.png',
    alt: 'Evelyn Helena',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
