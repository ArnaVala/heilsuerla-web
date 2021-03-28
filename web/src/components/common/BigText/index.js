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
          sx={{
            py: '64px',
            fontSize: ['24px', '32px'],
            px: ['16px', '32px'],
            lineHeight: 'heading'
          }}
          {...props}
        >
          {bigText}
        </Text>
      </Flex>
    </Box>
  )
}

export default BigText
