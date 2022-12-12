import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@luanyata/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    prefix: {
      control: { type: 'text' },
      defaultValue: 'yata.com/',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
