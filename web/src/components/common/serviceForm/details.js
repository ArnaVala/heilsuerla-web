import React from 'react'
import {Box, Text, Link} from 'theme-ui'
import Social from '../Social/index'

const Details = () => (
  <Box>
    <Box pb='32px'>
      <Text as='h4' variant='subheading'>Sendu póst á</Text>
      <span>
        <Link sx={{fontSize: '24px'}} href='mailto:erla@heilsuerla.is'>erla@heilsuerla.is</Link>
      </span>
    </Box>
    <Box pb='32px'>
      <Text as='h4' variant='subheading'>
        Hafðu samband í síma
      </Text>
      <span>
        <Link sx={{fontSize: '24px'}} href='tel:6152121'>
          615-2121
        </Link>
      </span>
    </Box>
    <Box pb='32px'>
      <Text as='h4' variant='subheading'>
        Finndu mig á
      </Text>
      <Box
        sx={{
          pt: '8px',
          lineHeight: '0px',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          display: 'flex'
        }}
      >
        <Social sx={{fontSize: '32px'}} />
      </Box>

    </Box>

  </Box>
)

export default Details

/* ;<Box>
  <Text as='h3' variant='subheading'>
    Finndu mig á
  </Text>
  <Box
    sx={{
      pt: '8px',
      lineHeight: '0px',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      display: 'flex'
    }}
  >
    <Social sx={{fontSize: '32px'}} />
  </Box>
</Box>
 */
