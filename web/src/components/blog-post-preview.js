import {Link} from 'gatsby'
import React from 'react'
import {getBlogUrl} from '../lib/helpers'
import Image from 'gatsby-plugin-sanity-image'

import {Box, Flex, Text} from 'theme-ui'
import Card from '../components/common/Card'

function BlogPostPreview (props) {
  return (
    <Card>
      <Link
        to={getBlogUrl(props.slug.current)}
      >
        <Box>
          {props.categories && (
            <Box sx={{display: 'inline-block'}}>
              {props.categories.map((category) => (
                <Box variant='text.tag' sx={{}} key={props.category._id}>
                  {props.category.title}
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Flex>
          {props.image && props.image.asset && (
            <Image
              {...props.image}
              width={1920}
              height={1920}
              alt={props.image.alt}
              css={{width: '100%', height: '100%', objectFit: 'cover', maxWidth: '480px'}}
            />

          )}
        </Flex>
      </Link>
      <Box >
        <Box as='h4' variant='text.postTitle'>{props.title}</Box>

      </Box>
    </Card>

  )
}

export default BlogPostPreview
