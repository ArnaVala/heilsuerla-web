import React from 'react'
import {Box, Text, Link} from 'theme-ui'
import Social from '../Social/index'

const Details = () => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', null, '1fr 1fr'],
      gridTemplateRows: ['auto'],
      gridTemplateAreas: [
        `
        "mail"
        'phone'       
        `,
        `
        "mail phone"       
        `

      ]
    }}>
    <Box sx={{gridArea: 'mail',
      pr: [0, 3, null, 5],
      borderRight: [null, '2px solid', null],
      borderRightColor: [null, 'primaryMuted', null, null],
      mb: [2, null, 0, null],
      pb: [2, null, 0, null]}} >
      <Text as='h4' sx={{fontSize: '24px'}}>
        Sendu póst á
      </Text>
      <span>
        <Link sx={{fontSize: '24px'}} href='mailto:erla@heilsuerla.is'>
          erla@heilsuerla.is
        </Link>
      </span>
    </Box>
    <Box pb='32px' sx={{gridArea: 'phone', pl: [0, 3, null, 5]
    }}>
      <Text as='h4' sx={{fontSize: '24px'}}>
        Hafðu samband í síma
      </Text>
      <span>
        <Link sx={{fontSize: '24px'}} href='tel:6152121'>
          615-2121
        </Link>
      </span>
    </Box>
  </Box>
)

export default Details
