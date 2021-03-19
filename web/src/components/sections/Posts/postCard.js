import React from 'react'
import {Link} from 'gatsby'
import {getBlogUrl} from '../../../lib/helpers'

import Image from 'gatsby-plugin-sanity-image'

import {Box, Text} from 'theme-ui'
import {Card} from '../../common'

export default function postCard ({post}) {
  const {image, categories, title, slug} = post
  return (
    <>
      <Card
        sx={{
          display: 'grid',
          gridTemplateRows: '0px auto auto',
          gridGap: 3
        }}
      >
        <Text as='h4' variant='text.caps'>
          {categories.map((category) => category.title).join(' ')}
        </Text>

        <Link to={getBlogUrl(slug.current)}>
          <Box sx={{height: 'auto'}}>
            {
              image && image.asset && (
                <Image
                  {...image}
                  width={800}
                  height={1000}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', ObjectFit: 'cover'}}
                />
              )
            }
          </Box>
          <h3 sx={{color: 'primaryLight'}}>
            {title}
          </h3>
        </Link>
        <Link sx={{alignContent: 'end'}}>Lesa meira</Link>
      </Card>
    </>
  )
}
