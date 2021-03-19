/** @jsx jsx */
import React, {useState} from 'react'
import {Link} from 'gatsby'
import {jsx, Styled} from 'theme-ui'

const StyledLi = ({children}) => (
  <li
    sx={{
      fontWeight: `bold`,
      fontSize: `5`,
      color: `primary`,
      '&:hover': {
        color: `muted`,
        listStyle: `circle`
      }
    }}
  >
    {children}
  </li>
)

const Hamburger = ({...props}) => {
  const [isOpen, setOpen] = useState(false)

  const shared = {
    backgroundColor: 'primary',
    borderRadius: '0',
    height: 3,
    content: `" "`,
    position: `absolute`,
    transition: 'all 250ms ease-in-out'
  }

  return (
    <>
      <button
        aria-controls='gatsby-nav'
        aria-expanded={isOpen ? `active` : `inactive`}
        aria-label='Toggle Navigation'
        className={isOpen ? `active` : `inactive`}
        onClick={() => setOpen(!isOpen)}
        sx={{
          height: '24px',
          display: ['flex', 'none'],
          backgroundColor: `transparent`,
          border: 0,
          padding: 0,
          ml: '3',
          position: 'relative',
          cursor: `pointer`,
          transition: 'all 250ms ease-in-out',
          '&.active': {
            '& .hamburger': {
              '&:after': {
                transform: `rotate(-45deg)`
              },
              '&:before': {
                transform: `rotate(45deg)`
              },
              '&:hover': {
                transform: `scale(1.2)`
              }
            }
          }
        }}
      >
        <div
          className='hamburger'
          sx={{
            width: '32px',
            height: 3,
            margin: `10px 0`,
            position: `relative`,
            zIndex: '10',
            borderRadius: '0',
            backgroundColor: isOpen ? 'transparent' : 'primary',
            transition: `all 250ms cubic-bezier(.68,-.55,.265,1.55)`,
            ':before': {
              content: JSON.stringify(``),
              top: isOpen ? 0 : '-8px',
              width: '24px',
              right: 0,
              ...shared
            },
            ':after': {
              content: JSON.stringify(``),
              top: isOpen ? 0 : '8px',
              width: isOpen ? '24px' : '24px',
              right: 0,
              ...shared
            }
          }}
        />
      </button>
      {isOpen && (
        <div
          sx={{
            display: ['flex', null, null, 'none'],
            alignItems: `center`,
            backgroundColor: `background`,
            transition: `all 250ms ease-in-out`,
            opacity: isOpen ? `0.95` : `0`,
            position: `fixed`,
            margin: 0,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: `1`
          }}
        >
          <nav
            sx={{
              my: `6`,
              mx: `5`,
              width: `100%`
            }}
          >
            <Styled.ul
              sx={{
                alignItems: 'center',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                borderTop: 'none'
              }}
            >
              <StyledLi>
                <Link to='/'>Heim</Link>
              </StyledLi>
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
                <Link to='/hafa-samband'>Hafa samband</Link>
              </StyledLi>
            </Styled.ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Hamburger
