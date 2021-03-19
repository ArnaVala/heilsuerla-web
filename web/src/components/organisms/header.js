/** @jsx jsx */
import {Link} from 'gatsby'
import {Box, Flex, jsx, Styled} from 'theme-ui'
import styled from '@emotion/styled'
import Hamburger from '../atoms/Hamburger'
import HeMonogram from '../atoms/Logo/heMonogram'
import Logo from '../../assets/Logo_HE.png'

const StyledLi = ({children}) => (
  <li
    sx={{
      fontWeight: 'normal',
      display: ['none', 'list-item']
    }}
  >
    {children}
  </li>
)

const LogoContainer = styled(Box)`
  width: 48px;
  height: 48px;
  object-fit: contain;

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
            <LogoContainer>
              <img src={Logo} alt='logo' />
            </LogoContainer>
            <span
              sx={{
                color: 'primary',
                fontSize: ['24px', '32px'],
                fontFamily: 'heading',
                mx: 2,
                display: 'inline'
              }}
            >
              Heilsu
              <strong>Erla</strong>
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
                ml: '4'
              }
            }}
          >
            <StyledLi>
              <Link to='/heilsumarkthjalfun'>Heilsumarkþjálfun</Link>
            </StyledLi>
            <StyledLi>
              <Link to='/radgjof'>Ráðgjöf</Link>
            </StyledLi>
            <StyledLi>
              <Link to='/um-erlu'>Um Erlu</Link>
            </StyledLi>
            <StyledLi>
              <Link to='/blogg'>Blogg</Link>
            </StyledLi>
          </Styled.ul>
          <Hamburger />
        </nav>
      </Flex>
    </Box>

  )
}

export default StyledHeader
