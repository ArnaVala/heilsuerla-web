import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import {Styled, Box, Flex, Grid} from 'theme-ui'

function BlogPostPreviewGrid (props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div>
          <Link>Fara á bloggið</Link>
        </div>
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
