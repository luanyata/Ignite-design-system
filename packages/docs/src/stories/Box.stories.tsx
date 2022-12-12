import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@luanyata/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o componente em tela</Text>,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
