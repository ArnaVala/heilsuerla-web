/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import {jsx, Box, Flex, Text} from 'theme-ui'
import logo from '../../assets/LogoPrimary.svg'
import {Eyebrow, Wrapper, Social} from '../common'

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
    <Wrapper variant='container.full' sx={{pb: '32px'}}>
      <Flex sx={{width: '100%', flexDirection: ['column'], justifyContent: 'center', alignItems: 'center'}}>
        <Flex />
        <Flex variant='container.row' sx={{flexDirection: ['column'], justifyContent: 'flex-start'}}>
          <Flex variant='container.column' sx={{pt: '32px', width: '100%', justifyContent: 'center', alignItems: 'center', flex: [1, 2]}}>
            <Link sx={{zIndex: '2'}} to='/'>
              <Flex
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start'
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

            <Box mt='32px'>
              <Social size={'48px'} />
            </Box>

            <Link sx={{
              my: '16px',
              a: {color: 'primaryBg',
                fontWeight: '300',
                fontSize: '20px',
                letterSpacing: '0.03em',
                lineHeight: '28px',
                '&:hover': {
                  color: 'accent'
                }
              }}}>

              <a
                href='mailto:erla@heilsuerla.is?subject=Fyrirspurn: Heilsumarkþjálfun með Erlu'
                target='_blank'
                rel='noopener noreferrer'
              >
                erla@heilsuerla.is
              </a>
            </Link>
          </Flex>
          <Flex variant='container.row' sx={{flexDirection: ['column', 'row'], justifyContent: 'center', alignItems: 'center'}}>
            <Flex
              variant='container.column'
              sx={{justifyContent: 'flex-start', alignItems: 'flex-start', pt: '32px', px: '32px'}}
            >
              <Eyebrow color='accentMuted' sx={{fontSize: '14px', letterSpacing: '0.1em', pb: '8px'}}>
                HeilsuErla
              </Eyebrow>
              <Flex
                as='ul'
                color='primaryBg'
                sx={{
                  p: '0',
                  flexDirection: 'column',
                  a: {
                    textAlign: 'center',
                    color: 'primaryBg',
                    fontWeight: '300',
                    fontSize: '16px',
                    letterSpacing: '0.03em',
                    lineHeight: '28px'
                  }
                }}
              >
                <Link aria-label='Um Erlu' to='/um-erlu'>
                  Um Erlu
                </Link>
                <Link aria-label='Um Erlu' to='/um-erlu'>
                  Hafa samband
                </Link>
              </Flex>
            </Flex>

            <Flex variant='container.column' sx={{justifyContent: 'flex-start', alignItems: 'center', pt: '32px', px: '32px'}} >
              <Eyebrow color='accentMuted' sx={{fontSize: '14px', letterSpacing: '0.1em', pb: '8px'}}>
                Þjónusta
              </Eyebrow>
              <Flex as='ul' color='primaryBg' sx={{p: '0',
                flexDirection: 'column',
                a: {
                  textAlign: 'center',
                  color: 'primaryBg',
                  fontWeight: '300',
                  fontSize: '16px',
                  letterSpacing: '0.03em',
                  lineHeight: '28px'

                }}}>
                <Link aria-label='heilsuviðtal' to='/heilsumarkthjalfun'>Heilsumarkþjálfun</Link>
                <Link to='/radgjof'>
                  Ráðgjöf og fyrirlestrar
                </Link>
                <Link aria-label='heilsuviðtal' to='/heilsuvidtal'>Bóka heilsuviðtal</Link>
              </Flex>
            </Flex>

            <Flex variant='container.column' sx={{justifyContent: 'flex-start', alignItems: 'center', pt: '32px', px: '32px'}} >
              <Eyebrow color='accentMuted' sx={{fontSize: '14px', letterSpacing: '0.1em', pb: '8px'}}>
                Blogg
              </Eyebrow>

              <Flex as='ul' color='primaryBg' sx={{p: '0',
                flexDirection: 'column',
                a: {
                  textAlign: 'center',
                  color: 'primaryBg',
                  fontWeight: '300',
                  fontSize: '16px',
                  letterSpacing: '0.03em',
                  lineHeight: '28px'

                }}}>
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
        </Flex>
      </Flex>

    </Wrapper>
    <Box color='primaryBg' sx={{pb: '32px', pt: '16px', borderTop: '1px solid', borderColor: 'inherit'}}>HeilsuErla @ 2021</Box>
  </Box>
)

export default Footer
