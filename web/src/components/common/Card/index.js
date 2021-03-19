import React from 'react'
import {jsx, Box} from 'theme-ui'

const Card = ({children, ...props}) => {
  return (
    <Box
      {...props}
    >
      {children}
    </Box>
  )
}

export default Card
