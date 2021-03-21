
import React from 'react'
/** @jsx jsx */
import PortableText from './portableText'

import {jsx, Flex, Box, Text} from 'theme-ui'

const HeroTextBlock = ({children, eyebrow, heading, description}) => {
  return (
    <Flex variant='container.column' sx={{justifyContent: 'center'}}>
      <Box sx={{py: ['64px', '96px', '128px'], px: ['16px', '32px', null], maxWidth: '720px', m: '0 auto'}}>
        <Text as='h5' variant='eyebrow'>{eyebrow}</Text>
        <Text as='h1' variant='hero'>{heading}</Text>
        <Box sx={{maxWidth: '540px'}}>
          <PortableText blocks={description} />
        </Box>
        {children}
      </Box>
    </Flex>
  )
}

export default HeroTextBlock
