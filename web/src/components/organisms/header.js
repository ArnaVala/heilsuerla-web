/** @jsx jsx */
import {Link} from 'gatsby'
import {Box, Flex, jsx, NavLink, Styled} from 'theme-ui'
import styled from '@emotion/styled'
import Hamburger from '../atoms/Hamburger'
import HeMonogram from '../atoms/Logo/heMonogram'
import Logo from '../../assets/Logo_HE.png'

const StyledLi = ({children}) => (
  <li
    sx={{
      fontWeight: '300',
      color: 'white',
      display: ['none', 'none', 'list-item']
    }}
  >
    {children}
  </li>
)

const LogoContainer = styled(Box)`
  object-fit: contain;
  display: flex;  

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledHeader = () => {
  return (
    <Box variant='layout.header'>
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
            <LogoContainer sx={{width: ['36px']}}>
              <img src={Logo} alt='logo' />
            </LogoContainer>
            <span
              sx={{
                color: 'primary',
                fontSize: ['24px', '32px'],
                fontFamily: 'heading',
                fontWeight: '300',
                mx: 2,
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

export default StyledHeader
