import React from 'react'

import { Story, Meta } from '@storybook/react'

import Navbar, { NavbarProps } from '.'

export default {
  component: Navbar,
  title: 'Prose/Navbar',
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

export const Primary = Template.bind({})

Primary.args = {}
