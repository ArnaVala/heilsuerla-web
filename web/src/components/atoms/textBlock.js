import React from 'react'
/** @jsx jsx */
import PortableText from '../atoms/portableText'

import {jsx, Flex, Box} from 'theme-ui'

const TextBlock = ({children, eyebrow, heading, description, raw}) => {
  return (
    <Flex sx={{order: '1', width: ['100%', null, '600px', null], py: ['32px', '32px', '64px'], flexDirection: 'column', px: '32px'}}>
      <Box as='h5' variant='text.eyebrow' sx={{pt: ['32px', '32px', null, '64px']}}>
        {eyebrow}
      </Box>
      <Box as='h4' sx={{fontSize: '36px', lineHeight: '1.25', fontFamily: 'heading', maxWidth: [null, null, null, '720px'], mb: '32px'}}>
        {heading}
      </Box>
      <Box sx={{maxWidth: '480px'}}>
        <PortableText blocks={description} />
      </Box>
      {children}
    </Flex>
  )
}

export default TextBlock
