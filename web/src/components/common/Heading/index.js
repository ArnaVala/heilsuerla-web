/** @jsx jsx */
import {jsx, Text} from 'theme-ui'

function Heading ({children, color, ...props}) {
  return (
    <Text
      color={color}
      sx={{
        fontFamily: 'body',
        fontWeight: '400',
        lineHeight: 'heading',
        textTransform: 'uppercase',
        fontSize: '16px',
        letterSpacing: '.05em',
        pb: '16px',
        color: 'accent'
      }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default Heading
