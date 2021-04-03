/** @jsx jsx */
import {Link} from 'gatsby'
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import PostCard from './postCard'
import {Section, Wrapper} from '../../common'
import {SectionTitle} from '../../molecules'

export default function PostListAllSection ({posts, title}) {
  return (
    <Section bg='primaryBg' variant='container.section'>
      <Wrapper variant='container.wide'>
        <Flex>
          <SectionTitle heading={title} description='Lestu það nýjasta á blogginu' />
        </Flex>
        <Grid
          sx={{
            display: 'grid',
            gap: [4, null, 4, null],
            pb: '32px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
        <Flex sx={{justifyContent: 'center', mt: '64px', fontSize: '18px', color: 'primaryLight'}}>
          <Link as='a' to='/blogg' sx={{
            borderBottom: '2px solid',
            borderColor: 'primaryLight'
          }}>Fara á bloggið</Link>
        </Flex>
      </Wrapper>
    </Section>)
}
