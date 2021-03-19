import {format, distanceInWords, differenceInDays} from 'date-fns'

import React from 'react'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../../components/atoms/portableText'

import {Box, Container, Flex, Grid, Text} from 'theme-ui'
import Share from '../../common/Share'

export default function SinglePost (props) {
  const {categories, image, publishedAt, _rawBody, _rawExcerpt, authors, title} = props
  console.log(props)

  return (
    <div>
      <Grid bg='muted' columns={[1, 2, 2]} gap={0} >
        <Flex px={[2, 3, 4]} sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Box>
            {categories.map((category) => (
              <Text as='h4' variant='caps' key={category.id}>
                {category.title}
              </Text>
            ))}
          </Box>
          <Text variant='title' sx={{textAlign: 'center'}}>{title}</Text>
          {publishedAt && (
            <Text variant='caps' sx={{fontSize: '14px'}}>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'DD / MM /YYYY')}
            </Text>
          )}
          <Share postTitle={title} />
        </Flex>
        <Flex bg='primary' sx={{width: '100%', height: '100%', maxHeight: ['240px', '100%']}}>
          {image && image.asset && (
            <Image
              {...image}
              width={3200}
              height={2400}
              alt={image.alt}
              css={{objectFit: 'cover', height: '100%', width: '100%'}}
            />
          )}
        </Flex>
      </Grid>

      <Container variant='container.inner' as='article' my={4}>
        {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
        <Box as='div' variant='container.blog'>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </Box>
      </Container>
    </div>

  )
}
