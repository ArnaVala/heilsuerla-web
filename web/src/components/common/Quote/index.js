
/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

const Quote = ({children, ...props}) => {
  return (
    <Box
      as='p'
      sx={{
        lineHeight: 'body',
        fontSize: ['24px', '32px'],
        fontWeight: '300',
        fontFamily: 'heading',
        letterSpacing: '0.03em',
        pb: '32px',
        maxWidth: '640px'
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Quote
