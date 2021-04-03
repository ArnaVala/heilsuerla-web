import React from 'react'
import {Box, Flex, Text} from 'theme-ui'

const Header = () => (
  <Box>
    <Flex
      variant='container.column'
      pb='32px'
      sx={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}
    >
      <Text
        as='h2'
        variant='sectionTitle'
        sx={{
          maxWidth: '640px'
        }}
      >
        Hafðu samband
      </Text>

      <Box sx={{height: '2px', mb: '24px', bg: 'accent', width: '128px'}} />
      <Text
        as='p'
        sx={{maxWidth: '560px', fontFamily: 'body', letterSpacing: '0.03em', fontWeight: '300', fontSize: ['20px', '24px']}}
      >
        Endilega hafðu samband ef þig langar að vita meira eða fá tilboð.
      </Text>
    </Flex>

  </Box>
)

export default Header
