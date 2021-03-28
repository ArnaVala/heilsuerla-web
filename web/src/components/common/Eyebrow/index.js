/** @jsx jsx */
import {jsx, Text} from 'theme-ui'

function Eyebrow ({children, color, ...props}) {
  return (
    <Text
      color={color}
      variant='text.eyebrow'
      {...props}
    >
      {children}
    </Text>
  )
}

export default Eyebrow
