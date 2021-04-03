import {format, distanceInWords, differenceInDays} from 'date-fns'

import React from 'react'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../../components/atoms/portableText'
import {Box, Flex, Grid, Text} from 'theme-ui'
import Share from '../../common/Share'
import {Section, Wrapper, Eyebrow} from '../../common'
import PostListAllSection from './postListAllSection'
import PostCard from './postCard'

export default function SinglePost (props) {
  const {categories, image, publishedAt, _rawBody, _rawExcerpt, title, posts} = props

  return (
    <Section as='section' variant='container.full'>
      <Grid bg='muted' mb='96px' gap={0} columns={[1, null, 2, null]} >
        <Flex px={[2, 3, 4]} pt={[4, 6]} pb={[2, 3]} sx={{flexDirection: 'column', order: [0, 0], alignItems: 'center', flexWrap: 'wrap', height: '100%'}}>
          <Box pb='16px'>
            {categories.map((category) => (
              <Eyebrow key={category.id}>
                {category.title}
              </Eyebrow>
            ))}
          </Box>
          <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Text variant='sectionTitle' sx={{textAlign: 'center', maxWidth: '640px'}}>{title}</Text>
            {publishedAt && (
              <Text variant='caps' sx={{fontSize: '14px'}}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'DD / MM /YYYY')}
              </Text>
            )}
          </Flex>
          <Share postTitle={title} />
        </Flex>
        <Flex bg='primary' sx={{width: '100%', height: '100%', maxHeight: ['240px', '400px', '100%']}}>
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
      <Wrapper variant='container.wide' pb={[4, null, 6]} sx={{height: '100%', minHeight: '100%'}} >

        <Box variant='container.excerpt'>
          {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
        </Box>
        <Box variant='container.blog'>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </Box>
      </Wrapper>
    </Section>

  )
}
