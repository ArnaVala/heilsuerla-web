/** @jsx jsx */
import {Link} from 'gatsby'
import {Box, Flex, jsx, NavLink, Styled} from 'theme-ui'
import styled from '@emotion/styled'
import Hamburger from '../atoms/Hamburger'
import HeMonogram from '../atoms/Logo/heMonogram'
import logo from '../../assets/LogoAccent.svg'
import {Headroom} from 'react-headroom'

const LogoContainer = styled(Box)`
  object-fit: contain;
  display: flex;  

  img {
    width: 100%;
    height: 100%;
  }
`

const Header = () => {
  return (
    <Box bg='white' variant='layout.header'>
      <Flex
        sx={{
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: 'primary'
        }}
      >
        <Link sx={{alignSelf: 'center', zIndex: '2'}} to='/'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <LogoContainer sx={{width: ['40px', '48px']}}>
              <img src={logo} alt='logo' />
            </LogoContainer>
            <span
              sx={{
                color: 'primary',
                fontSize: ['24px', '32px'],
                fontFamily: 'heading',
                fontWeight: '300',
                mx: 1,
                mt: '4px',
                display: 'inline'
              }}
            >
              Heilsu
              <strong sx={{color: 'primary'}}>Erla</strong>
            </span>
          </Box>
        </Link>
        <nav
          sx={{
            display: 'flex', alignItems: 'center'
          }}>
          <Styled.ul
            sx={{
              display: 'flex',
              alignItems: 'center',
              listStyle: 'none',
              '* + *': {
                ml: 3
              }
            }}
          >

            <NavLink as={Link} to='/heilsumarkthjalfun'>Heilsumarkþjálfun</NavLink>
            <NavLink as={Link} to='/radgjof'>
              Ráðgjöf
            </NavLink>
            <NavLink as={Link} to='/blogg'>
              Blogg
            </NavLink>
            <NavLink as={Link} to='/um-erlu'>
              Um Erlu
            </NavLink>
          </Styled.ul>
          <Hamburger />
        </nav>
      </Flex>
    </Box>
  )
}

export default Header
