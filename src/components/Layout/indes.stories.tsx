import React from 'react'
import * as theme from '../../../tailwind.config'

const colors = theme.theme.extend.colors

import { Story, Meta } from '@storybook/react'

import Layout, { LayoutProps } from '.'

export default {
  component: Layout,
  title: 'Containers/Layout',
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: (
    <div
      style={{
        backgroundColor: colors.gray.red,
        height: '800px',
        width: '100%',
      }}
    />
  ),
}
