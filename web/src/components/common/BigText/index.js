/** @jsx jsx */

import {jsx, Box, Flex, Text} from 'theme-ui'

const BigText = ({bigText, bg, color, ...props}) => {
  return (
    <Box bg={bg}
      sx={{width: '100%', my: '64px'}}>
      <Flex sx={{width: '100%', justifyContent: 'center'
      }}>
        <Text
          as='blockquote'
          variant='quote'
          color={color}
          sx={{p: 4,
            textAlign: 'center',
            m: '0',
            border: 'none',
            width: '100%',
            maxWidth: '720px'}}
          {...props}
        >
          {bigText}
        </Text>
      </Flex>
    </Box>
  )
}

export default BigText
