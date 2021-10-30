import React from 'react'

import { Story, Meta } from '@storybook/react'

import Link, { LinkProps } from '.'

export default {
  component: Link,
  title: 'Prose/Link',
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'This is a link to somewhere else',
}
