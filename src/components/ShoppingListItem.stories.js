import React from 'react'
import ShoppingListItem from './ShoppingListItem'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'ShoppingListItem',
  component: ShoppingListItem,
}

const listItem = ['bananas']
export const ShoppingListItemDefault = () => (
  <>
    <GlobalStyles />
    <ShoppingListItem listItem={listItem} />
  </>
)
