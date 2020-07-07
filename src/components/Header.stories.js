import React from 'react'
import GlobalStyles from '../GlobalStyles'
import Header from './Header'

export default {
  title: 'header',
  component: Header,
}

export const HeaderComponent = () => (
  <>
    <GlobalStyles />
    <Header />
  </>
)
