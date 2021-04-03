
/** @jsx jsx */
import {Link} from 'gatsby'

import {jsx, Flex, Text} from 'theme-ui'

const BloggNav = () => (
  <Flex variant='container.column' sx={{textAlign: 'center', justifyContent: 'flex-start'}}>
    <Text
      color='primaryLight'
      sx={{
        fontWeight: '500',
        textTransform: 'uppercase',
        fontSize: '14px',
        letterSpacing: '0.1em',
        pb: '4px'
      }}
    >
      Tenglar
    </Text>
    <Flex
      as='ul'
      sx={{
        p: '0',
        flexDirection: 'column',
        a: {
          color: 'primaryMuted',
          fontWeight: '300',
          fontSize: '20px',
          letterSpacing: '0.03em',
          lineHeight: '36px'
        }
      }}
    >
      <Link aria-label='heilsuviðtal' to='/heilsumarkthjalfun'>
        Heilsumarkþjálfun
      </Link>
      <Link to='/radgjof'>Ráðgjöf og fyrirlestrar</Link>
      <Link aria-label='Um Erlu' to='/um-erlu'>
        Um Erlu
      </Link>
      <Link aria-label='Blogg' to='/blogg'>
        Blogg
      </Link>
      <Link aria-label='heilsuviðtal' to='/boka-heilsuvidtal'>
        Bóka heilsuviðtal
      </Link>
    </Flex>
  </Flex>
)

export default BloggNav
