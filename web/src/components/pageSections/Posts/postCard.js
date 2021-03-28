import React from 'react'
import {Link} from 'gatsby'
import {getBlogUrl} from '../../../lib/helpers'

import Image from 'gatsby-plugin-sanity-image'

import {Box, Text, Flex, Card} from 'theme-ui'

export default function PostCard ({post}) {
  const {image, categories, title, slug} = post
  return (
    <Card variant='postCard'>
      <Link to={getBlogUrl(slug.current)}>
        <Box sx={{
          display: 'grid',
          gridTemplateRows: 'auto auto auto',
          gridGap: 2
        }}>
          <Box sx={{height: 'auto'}}>
            {
              image && image.asset && (
                <Image
                  {...image}
                  width={800}
                  height={800}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              )
            }
          </Box>
          <Flex sx={{alignItems: 'center', justifyContent: 'center', mt: '8px'}}>
            {categories.map((category) => (
              <Text variant='postCategory' key={category.id}>
                {category.title}
              </Text>
            ))}
          </Flex>
          <Flex sx={{justifyContent: 'center', alignItems: 'center', p: '24px', height: '120px', mb: '32px'}}>
            <Text sx={{justifyContent: 'center'}} variant='postTitle'>
              {title}
            </Text>
          </Flex>
        </Box>
      </Link>
    </Card>
  )
}
