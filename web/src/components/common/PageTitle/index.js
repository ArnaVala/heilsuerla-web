/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

function PageTitle ({children, ...props}) {
  return (
    <Box
      as='h1'
      color='white'
      sx={{
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'light',
        fontSize: [5, 6, 7, 8],
        overflowWrap: 'break-word',
        hyphens: ' auto',
        wordBreak: 'break-word',
        maxWidth: ['560px', null, '640px', '720px']

      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default PageTitle
