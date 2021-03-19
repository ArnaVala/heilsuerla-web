import React from 'react'
/** @jsx jsx */
import {jsx, Box, Flex} from 'theme-ui'
import {Title, Desc, Wrapper} from '../common'

const HeadlineAndText = ({heading, description}) => {
  return (
    <Box sx={{py: '64px'}}>
      <Title as='h2' variant='text.title'>{heading}</Title>
      <Box bg='accent' sx={{width: '240px', height: '2px', mb: '32px'}} />
      <Desc color='primaryLight' variant='text.bigBody'>{description}</Desc>
    </Box>
  )
}

export default HeadlineAndText
