/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

function Eyebrow ({children, ...props}) {
  return (
    <Box
      color='primaryLight'
      sx={{
        fontFamily: 'body',
        fontWeight: 'bold',
        lineHeight: 'body',
        textTransform: 'uppercase',
        fontSize: '16px',
        letterSpacing: '.05em'
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Eyebrow
