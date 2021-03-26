/** @jsx jsx */

import {jsx, Box} from 'theme-ui'

const Title = ({children, ...props}) => {
  return <Box {...props}>{children}</Box>
}

export default Title
