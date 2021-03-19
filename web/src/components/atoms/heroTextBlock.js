
import React from 'react'
/** @jsx jsx */
import PortableText from './portableText'

import {jsx, Flex, Box} from 'theme-ui'

const HeroTextBlock = ({children, eyebrow, heading, description, raw}) => {
  return (
    <Flex variant='container.textCol' sx={{py: '96px', justifyContent: 'center'}}>
      <Box as='h5' variant='text.eyebrow'>{eyebrow}</Box>
      <Box as='h1' variant='text.hero'>{heading}</Box>
      <Box sx={{maxWidth: '540px'}}>
        <PortableText blocks={description} />
      </Box>
      {children}
    </Flex>

  )
}

export default HeroTextBlock
