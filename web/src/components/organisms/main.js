
/** @jsx jsx */
import React from 'react'
import {jsx, Box} from 'theme-ui'

const Main = ({children}) => (
  <Box
    as='main' variant='layout.main'
  >
    {children}
  </Box>
)

export default Main
