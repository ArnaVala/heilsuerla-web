
/** @jsx jsx */
import React from 'react'
import {jsx, Box} from 'theme-ui'

const Main = ({children}) => (
  <Box
    as='main' variant='layout.main'
    sx={{
      pt: ['88px', '105px']
    }}
  >
    {children}
  </Box>
)

export default Main
