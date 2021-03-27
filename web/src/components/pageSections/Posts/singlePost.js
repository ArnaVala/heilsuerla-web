import {format, distanceInWords, differenceInDays} from 'date-fns'

import React from 'react'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../../components/atoms/portableText'
import {Box, Flex, Grid, Text} from 'theme-ui'
import Share from '../../common/Share'
import {Wrapper} from '../../common'
import PostListAllSection from './postListAllSection'

export default function SinglePost (props) {
  const {categories, image, publishedAt, _rawBody, _rawExcerpt, title, posts} = props
  console.log(props)

  return (
    <div>
      <Grid bg='muted' columns={[1, 2, 2]} gap={0} >
        <Flex px={[2, 3, 4]} sx={{flexDirection: 'column', order: [1, 0], justifyContent: 'center', alignItems: 'center', height: '100%', py: '64px'}}>
          <Box>
            {categories.map((category) => (
              <Text as='h4' variant='eyebrow' pb='32px' key={category.id}>
                {category.title}
              </Text>
            ))}
          </Box>
          <Text variant='sectionTitle' sx={{textAlign: 'center', pb: '32px'}}>{title}</Text>
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
              width={1500}
              height={1200}
              alt={image.alt}
              css={{objectFit: 'cover', height: '100%', width: '100%'}}
            />
          )}
        </Flex>

      </Grid>

      <Wrapper
        variant='container.wide'
        sx={{
          px: ['20px', '64px'],
          py: ['64px']
        }}
      >

        {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
        <Box as='div' variant='container.blog' sx={{maxWidth: '560px', margin: '0 auto'}}>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </Box>
      </Wrapper>
    </div>

  )
}
