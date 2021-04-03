import React from 'react'
import {Box, Text} from 'theme-ui'

const Testimonial = ({key, quote, name}) => {
  return (
    <Box bg='muted' key={key} sx={{display: 'block'}}>
      <Text as='p' color='primary' variant='quote'>{quote}</Text>
      <Text as='p' color='primary' variant='eyebrow'>{name}</Text>
    </Box>
  )
}

export default Testimonial
