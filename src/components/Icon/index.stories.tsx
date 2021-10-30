import React from 'react'

import { Story, Meta } from '@storybook/react'

import Icon, { Props } from '.'

export default {
  component: Icon,
  title: 'Components/Icon',
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = (args) => <Icon {...args} />

export const Primary = Template.bind({})

Primary.args = {
  color: '#D22',
  variant: 'search',
}
