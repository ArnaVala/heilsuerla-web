import React from 'react'
import {Box, Flex, Text, Link} from 'theme-ui'
import Social from './footerSocial'

const ContactDetails = () => (
  <Flex color='primaryLight' sx={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', 'h4': {fontWeight: '500', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '0.1em', pb: '4px'}}}>
    <Box pb='24px'>
      <Text as='h4'>
        Sendu póst á
      </Text>
      <span>
        <Link as='a' color='primaryMuted' sx={{fontSize: '20px', fontWeight: '300'}} href='mailto:erla@heilsuerla.is?subject=Fyrirspurn: Heilsumarkþjálfun með Erlu'
          target='_blank'
          rel='noopener noreferrer'
        >
          erla@heilsuerla.is
        </Link>

      </span>
    </Box>
    <Box pb='24px'>
      <Text as='h4' variant='subheading'>
        Hafðu samband í síma
      </Text>
      <span>

        <Link as='a' color='primaryMuted' sx={{fontSize: '20px', fontWeight: '300'}} href='tel:6152121'>
          615-2121
        </Link>
      </span>
    </Box>
    <Box >
      <Text as='h4' variant='subheading'>
        Finndu mig á
      </Text>
      <Box
        sx={{
          pt: '4px',
          lineHeight: '0px',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          display: 'flex'
        }}
      >
        <Social color='primaryMuted' sx={{fontSize: '24px'}} />
      </Box>
    </Box>
  </Flex>
)

export default ContactDetails

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
