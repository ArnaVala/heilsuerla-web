import React from 'react'

import {jsx, Box, Flex, Text} from 'theme-ui'
import {Section, Wrapper, Card} from '../../common'
import PostCard from './postCard'

export default function PostList ({posts}) {
  return (
    <Section bg='white'>
      <Wrapper variant='container.inner'>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Box>
      </Wrapper>
    </Section>
  )
}
