/** @jsx jsx */

import React from 'react'
import {jsx, Box} from 'theme-ui'

const Title = ({children, ...props}) => {
  return <Box {...props}>{children}</Box>
}

export default Title
