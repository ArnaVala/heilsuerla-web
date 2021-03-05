import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {Helmet} from 'react-helmet'

const Layout = () => {
  return (
    <div>
      <Helmet>
        <title>HeilsuErla</title>
        <meta name='description' content='HeilsuErla, heilsumarkþjálfun og ráðgjöf' />
      </Helmet>
      hello
    </div>
  )
}

export default Layout
