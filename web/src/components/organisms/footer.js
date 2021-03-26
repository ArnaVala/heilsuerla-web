/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import {jsx, Box, Flex, Text} from 'theme-ui'
import logo from '../../assets/LogoPrimary.svg'
import {Wrapper, Social} from '../common'

const LogoContainer = styled(Box)`
  object-fit: contain;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }
`

const CopyRightArea = styled.div`
  border-top: '1px solid';
  border-color: 'accent';
  padding: 16px 0;
  p {
    color: 'primaryLight';
    font-size: 13px;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: 'white',
;     font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
      
      }
    }
  }
`

const Footer = () => (
  <Box as='footer' bg='primary' sx={{width: '100%', px: ['16px', '48px', '64px', null], pt: ['64px']}}>
    <Wrapper variant='container.full'>
      <Flex variant='container.row' sx={{gap: '32px'}}>
        <Flex variant='container.row' sx={{flexDirection: ['column', 'row'], justifyContent: 'space-between', alignItems: 'center', flex: '100%'}}>
          <Link sx={{zIndex: '2'}} to='/'>
            <Flex
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
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
                <Text variant='caps' sx={{fontSize: '12px', lineHeight: '32px', mb: '0'}}>Heilsumarkþjálfun & ráðgjöf</Text>

              </span>
            </Flex>
          </Link>
          <Box >
            <Social size={'48px'} />
          </Box>
        </Flex>
        <Flex variant='container.column'>
          <Link sx={{
            mb: '16px',
            ml: '56px',
            a: {color: 'primaryBg',
              fontWeight: '300',
              fontSize: '16px',
              letterSpacing: '0.03em',
              lineHeight: '28px'
            }}}>
            <a
              href='mailto:erla@heilsuerla.is?subject=Fyrirspurn: Heilsumarkþjálfun með Erlu'
              target='_blank'
              rel='noopener noreferrer'
            >
              erla@heilsuerla.is
            </a>
          </Link>
          <Box
            sx={{color: 'primaryBg',
              fontWeight: '300',
              fontSize: '16px',
              letterSpacing: '0.03em',
              lineHeight: '28px'}}>
            Erla Guðmundsdóttir er heilsumarkþjálfi og ráðgjafi.
          </Box>
        </Flex>

        <Flex variant='container.column' sx={{pt: '32px'}} >
          <Text variant='eyebrow' color='accentMuted' sx={{fontSize: '14px', letterSpacing: '0.1em', pb: '8px'}}>
            HeilsuErla
          </Text>
          <Flex as='ul' color='primaryBg' sx={{p: '0',
            flexDirection: 'column',
            a: {
              color: 'primaryBg',
              fontWeight: '300',
              fontSize: '16px',
              letterSpacing: '0.03em',
              lineHeight: '28px'

            }}}>
            <Link aria-label='heilsuviðtal' to='/heilsuvidtal'>Heilsumarkþjálfun</Link>
            <Link to='/heilsuvidtal'>
              Ráðgjöf og fyrirlestrar
            </Link>
            <Link aria-label='um Erlu' to='/um-erlu'>
              Um Erlu
            </Link>
            <Link aria-label='heilsuviðtal' to='/heilsuvidtal'>Bóka heilsuviðtal</Link>
            <Link aria-label='hafa samband' to='/hafa-samband'>Hafa samband</Link>
          </Flex>
        </Flex>
        <Flex variant='container.column' sx={{pt: '32px'}}>
          <Text
            variant='eyebrow'
            color='accentMuted'
            sx={{fontSize: '14px', letterSpacing: '0.1em', pb: '8px'}}
          >
            Blogg
          </Text>
          <Flex
            as='ul'
            color='primaryBg'
            sx={{
              p: '0',
              flexDirection: 'column',
              a: {
                color: 'primaryBg',
                fontWeight: '300',
                fontSize: '16px',
                letterSpacing: '0.03em',
                lineHeight: '28px'
              }
            }}
          >
            <Link aria-label='nýjustu pistlar' to='/blogg/'>
              Nýjustu pistlar
            </Link>
            <Link aria-label='heilsupistlar' to='/blogg/Heilsupistlar'>
              Heilsupistlar
            </Link>
            <Link aria-label='heilsumolar' to='/blogg/Heilsumolar'>
              Heilsumolar
            </Link>
            <Link aria-label='uppskriftir' to='/blogg/Uppskriftir'>
              Uppskriftir
            </Link>
            <Link aria-label='reynslusögur' to='/blogg/Reynslusögur'>
              Reynslusögur
            </Link>
          </Flex>
        </Flex>
      </Flex>

    </Wrapper>
    <Box color='primaryBg' sx={{pb: '32px', pt: '16px', borderTop: '1px solid', borderColor: 'inherit'}}>HeilsuErla @ 2021</Box>
  </Box>
)

export default Footer
