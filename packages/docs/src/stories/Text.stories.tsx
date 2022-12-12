import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@luanyata/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem similique tempore, incidunt in quasi inventore ipsam veniam qui ratione nam nesciunt illum, rerum porro quibusdam debitis nemo id labore possimus.',
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
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
