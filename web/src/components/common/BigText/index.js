/** @jsx jsx */

import {jsx, Box, Text} from 'theme-ui'

const BigText = ({bigText, bg, color, ...props}) => {
  return (
    <Box sx={{margin: '0 auto', my: '64px'}}>
      <Text
        as='blockquote'
        variant='heading'
        bg={bg}
        color={color}
        sx={{p: 4, textAlign: 'center', m: '0', border: 'none'}}
        {...props}
      >
        {bigText}
      </Text>
    </Box>
  )
}

export default BigText
