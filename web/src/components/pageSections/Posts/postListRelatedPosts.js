
/** @jsx jsx */
import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {jsx, Box, Flex, Text} from 'theme-ui'
import PostCard from './postCard'
import {Section, Wrapper} from '../../common'
import PostList from './postList'

const RelatedPosts = ({slug, categories, related}) => {
// get categ slugs
  const postSlugs = categories.map(({slug}) => slug)
  let relatedPosts = {}

  relatedPosts.edges = related.edges
    .filter((post) => post.slug !== slug) // remove current article
    .map((post) => {
      const {categories} = post.data
      let categoryMatch = false

      categories.forEach(({slug}) => {
        if (postSlugs.includes(slug)) {
          categoryMatch = true
        }
      })

      if (categoryMatch) {
        return post
      }
    })
    .slice(0, 3) // limit number of articles

  return (
    <Section bg='primaryBg'>
      <Wrapper variant='container.narrow' sx={{m: '0 auto'}}>
        <Flex variant='container.column'>
          <Text variant='subtitle'>Tengdar greinar</Text>
        </Flex>
        <Box
          sx={{
            px: '16px',
            display: 'grid',
            gap: 3,
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
          }}
        >
          {relatedPosts.edges.length > 0 ? (
            <PostList posts={relatedPosts} />
          ) : (

            <p>fann engar tengdar greinar</p>
          )}
        </Box>
        <Flex sx={{justifyContent: 'center', mt: '64px', fontSize: '18px', color: 'primaryLight'}}>
          <Link as='a' to='/blogg'>Fara aftur á bloggið</Link>
        </Flex>
      </Wrapper>
    </Section>
  )
}

export default RelatedPosts
