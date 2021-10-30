import React from 'react'

import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Button',
}
