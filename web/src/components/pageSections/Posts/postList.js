import React from 'react'

import {jsx, Box, Flex, Text} from 'theme-ui'
import {Section, Wrapper, Card} from '../../common'
import PostCard from './postCard'
import postList from './postList'

export default function PostList ({posts}) {
  return (
    <Section bg='primaryBg'>
      <Wrapper variant='container.wide'>
        <Box
          sx={{
            display: 'grid',
            gap: [2, 3, null, 4],
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
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
