/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import {jsx, Box, Flex, Text} from 'theme-ui'
import logo from '../../../assets/LogoAccent.svg'

const LogoContainer = styled(Box)`
  object-fit: contain;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }
`

const FooterLogo = () => (

  <Flex
    variant='container.column'
    sx={{
      pt: '32px',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flex: [1, 2]
    }}
  >
    <Link to='/'>
      <Flex
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <LogoContainer sx={{width: ['48px', '80px']}}>
          <img src={logo} alt='logo' />
        </LogoContainer>
        <span
          sx={{
            color: 'primaryMuted',
            fontSize: '44px',
            fontFamily: 'heading',
            fontWeight: '300',
            lineHeight: '32px',
            letterSpacing: '0.05em',
            mx: 2,
            mt: '24px',
            display: 'inline'
          }}
        >
          Heilsu
          <strong>Erla</strong>
          <Text variant='caps' sx={{fontSize: '12px', lineHeight: '32px', mb: '0'}}>
            Heilsumarkþjálfun & ráðgjöf
          </Text>
        </span>
      </Flex>
    </Link>
  </Flex>
)

export default FooterLogo
