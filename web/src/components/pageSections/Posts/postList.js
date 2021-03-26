import React from 'react'

import {jsx, Box, Flex, Text} from 'theme-ui'
import {Section, Wrapper, Card} from '../../common'
import PostCard from './postCard'
import postList from './postList'

export default function PostList ({posts}) {
  return (
    <Section bg='primaryBg' sx={{px: ['16px', '64px', null, null]}}>
      <Wrapper variant='container.wide'>
        <Box
          sx={{
            px: '16px',
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
      </Wrapper>
    </Section>
  )
}
