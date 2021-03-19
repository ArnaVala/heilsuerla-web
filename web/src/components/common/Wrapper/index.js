import React from 'react'
import {Box} from 'theme-ui'

const Wrapper = ({children, ...props}) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default Wrapper
