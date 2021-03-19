
/** @jsx jsx */
import {jsx, Text} from 'theme-ui'

const Desc = ({children, ...props}) => {
  return (
    <Text as='p' {...props}>
      {children}
    </Text>
  )
}

export default Desc
