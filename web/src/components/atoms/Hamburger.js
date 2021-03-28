/** @jsx jsx */
import React, {useState} from 'react'
import {Link as gatsbyLink} from 'gatsby'
import {jsx, Styled, Box, Flex, Nav, Grid, Button, Link} from 'theme-ui'

const Hamburger = ({...props}) => {
  const [isOpen, setOpen] = useState(false)

  const shared = {
    backgroundColor: isOpen ? 'white' : 'primary',
    borderRadius: '0',
    height: 3,
    content: '" "',
    position: 'absolute',
    transition: 'all 250ms ease-in-out'
  }

  return (
    <Box>
      <button
        aria-controls='gatsby-nav'
        aria-expanded={isOpen ? 'active' : 'inactive'}
        aria-label='Toggle Navigation'
        className={isOpen ? 'active' : 'inactive'}
        onClick={() => setOpen(!isOpen)}
        sx={{
          height: '24px',
          display: ['flex', 'flex', 'none'],
          backgroundColor: 'transparent',
          border: 0,
          padding: 0,
          ml: '3',
          position: 'relative',
          cursor: 'pointer',
          transition: 'all 250ms ease-in-out',
          '&.active': {
            '& .hamburger': {
              '&:after': {
                transform: 'rotate(-45deg)'
              },
              '&:before': {
                transform: 'rotate(45deg)'
              },
              '&:hover': {
                transform: 'scale(1.2)'
              }
            }
          }
        }}
      >
        <Box
          className='hamburger'
          sx={{
            width: '32px',
            height: 3,
            margin: '10px 0',
            position: 'relative',
            zIndex: '1000',
            borderRadius: '0',
            postion: 'fixed',
            backgroundColor: isOpen ? 'transparent' : 'primary',
            transition: 'all 250ms cubic-bezier(.68,-.55,.265,1.55)',
            ':before': {
              content: JSON.stringify(''),
              top: isOpen ? 0 : '-8px',
              width: '24px',
              right: 0,
              ...shared
            },
            ':after': {
              content: JSON.stringify(''),
              top: isOpen ? 0 : '8px',
              width: isOpen ? '24px' : '24px',
              right: 0,
              ...shared
            }
          }}
        />
      </button>
      {isOpen && (
        <Flex
          sx={{
            display: ['flex', null, 'none'],
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary',
            transition: 'all 250ms ease-in-out',
            opacity: isOpen ? '1' : '0',
            position: 'fixed',
            margin: 0,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: '101'
          }}
        >
          <nav
            sx={{
              width: '100%',
              textAlign: 'center'
            }}
          >
            <Flex
              as='ul'
              sx={{
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                listStyle: 'none',
                p: 0
              }}
            >

              <Link as={gatsbyLink} variant='hamburger' to='/heilsumarkthjalfun'>Heilsumarkþjálfun</Link>
              <Link as={gatsbyLink} variant='hamburger' to='/radgjof'>
                Ráðgjöf
              </Link>
              <Link as={gatsbyLink} variant='hamburger' to='/um-erlu'>
                Um Erlu
              </Link>

              <Link as={gatsbyLink} variant='hamburger' to='/blogg'>
                Blogg
              </Link>

              <Link as={gatsbyLink} variant='hamburger' to='/hafa-samband'>
                Bóka heilsuviðtal
              </Link>

            </Flex>
          </nav>
        </Flex>
      )}
    </Box>
  )
}

export default Hamburger
