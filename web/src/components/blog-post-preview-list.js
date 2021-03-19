/** @jsx jsx */
import {Link} from 'gatsby'
import React from 'react'
import {jsx, Box, Flex, Grid, Styled} from 'theme-ui'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewList (props) {
  return (
    <Box as='section' variant='container.full'>
      <Flex bg='white' variant='container.wide' sx={{width: '100%', flexDirection: 'column', overFlow: 'hidden'
      }}>
        {props.title && <Styled.h3 sx={{width: '100%', textAlign: 'center'}}>{props.title}</Styled.h3>}
        <Grid sx={{gridTemplateColumns: 'repeat( 3, minmax(360px, 1fr) )'}}>
          {props.nodes &&
          props.nodes.map(node => (
            <Box key={node.id}>
              <BlogPostPreview {...node} isInList />
            </Box>
          ))}
        </Grid>
        {props.browseMoreHref && (
          <div>
            <Link as='a' to={props.browseMoreHref}>Fara á bloggið</Link>
          </div>
        )}
      </Flex>
    </Box>
  )
}

export default BlogPostPreviewList
