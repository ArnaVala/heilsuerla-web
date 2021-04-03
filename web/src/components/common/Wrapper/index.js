import React from 'react'
import {Box} from 'theme-ui'

const Wrapper = ({children, ...props}) => {
  return (
    <Box
      variant='container.wrapper'
      sx={{
        mx: 'auto'
      }}
      {...props}>
      {children}
    </Box>
  )
}

export default Wrapper
