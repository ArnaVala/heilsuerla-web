/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

function HeroTitle ({children, ...props}) {
  return (
    <Box
      sx={{
        fontFamily: 'heading',
        fontWeight: 'bold',
        lineHeight: 'heading',
        letterSpacing: '0.01em',
        fontSize: ['48px', '72px', '64px', '80px', '96px'],
        pb: '32px'
      }}

      {...props}
    >
      {children}
    </Box>
  )
}

export default HeroTitle
