/** @jsx jsx */
import {Link} from 'gatsby'
import {jsx, Box, Flex, Text} from 'theme-ui'
import PostCard from './postCard'
import {Section, Wrapper} from '../../common'

export default function PostListAllSection ({posts, title}) {
  return (
    <Section bg='primaryBg' sx={{px: ['16px', '64px', null, null]}}>
      <Wrapper variant='container.wide' sx={{m: '0 auto'}}>
        <Flex variant='container.column'>
          {
            title && <Text
              variant='sectionTitle'
              color='primaryLight'
              sx={{
                maxWidth: '640px',
                pb: '64px'
              }}
            >
              {title}
            </Text>

          }
        </Flex>
        <Box
          sx={{
            display: 'grid',
            gap: [3, null, 4, null],
            rowGap: '64px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Box>
        <Flex sx={{justifyContent: 'center', mt: '64px', fontSize: '18px', color: 'primaryLight'}}>
          <Link as='a' to='/blogg'>Fara á bloggið</Link>
        </Flex>
      </Wrapper>
    </Section>
  )
}
