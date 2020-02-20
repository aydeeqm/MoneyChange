import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import Home from './pages/Home'

import { Router } from '@reach/router'

export function App () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Home path='/' />
      </Router>
    </>
  )
}
