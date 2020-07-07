import React from 'react'
import Button from './Button'
import GlobalStyles from '../GlobalStyles'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: Button,
}

export const defaultButton = () => (
  <>
    <GlobalStyles />
    <Button onClick={action('clicked')} text='submit' />
  </>
)
