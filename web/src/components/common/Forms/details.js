import React from 'react'
import {Box, Text, Link} from 'theme-ui'

const Details = () => (
  <Box>
    <Box pb='32px'>
      <Text as='h4' variant='subheading'>Sendu póst á</Text>
      <span>
        <Link sx={{fontSize: '24px'}} href='mailto:erla@heilsuerla.is'>erla@heilsuerla.is</Link>
      </span>
    </Box>
    <Box>
      <Text as='h3' variant='subheading'>Skilaboð á messenger</Text>

    </Box>

  </Box>
)

export default Details
