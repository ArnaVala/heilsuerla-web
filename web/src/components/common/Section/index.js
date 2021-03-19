import React from 'react'
import {Box} from 'theme-ui'

const Section = ({children, ...props}) => {
  return (
    <Box as='section' variant='container.section' {...props}>
      {children}
    </Box>
  )
}

export default Section
