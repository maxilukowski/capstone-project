import React from 'react'
import ShoppingList from './ShoppingList'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'ShoppingList',
  component: ShoppingList,
}

const testItems = ['apples', 'bananas', 'kiwi']

export const ShoppingListDefault = () => (
  <>
    <GlobalStyles />
    <ShoppingList shoppingListItems={testItems} />
  </>
)
