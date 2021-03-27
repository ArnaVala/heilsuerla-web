import {format, distanceInWords, differenceInDays} from 'date-fns'

import React from 'react'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../../components/atoms/portableText'
import {Box, Flex, Grid, Text} from 'theme-ui'
import Share from '../../common/Share'
import {Section, Wrapper} from '../../common'
import PostListAllSection from './postListAllSection'

export default function SinglePost (props) {
  const {categories, image, publishedAt, _rawBody, _rawExcerpt, title, posts} = props
  console.log(props)

  return (
    <Box as='section' sx={{m: '0px', p: '0px'}}>
      <Wrapper variant='container.full'>
        <Grid bg='primaryBg' columns={[1, 1, 2, 2]} gap={0} >
          <Flex px={[2, 3, 4]} sx={{flexDirection: 'column', order: [0, 0], justifyContent: 'center', alignItems: 'center', height: '100%', py: '64px', flexWrap: 'wrap'}}>
            <Box>
              {categories.map((category) => (
                <Text as='h4' variant='eyebrow' pb='32px' key={category.id}>
                  {category.title}
                </Text>
              ))}
            </Box>
            <Text variant='sectionTitle' sx={{textAlign: 'center', pb: '32px', maxWidth: '640px'}}>{title}</Text>
            {publishedAt && (
              <Text variant='caps' sx={{fontSize: '14px'}}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'DD / MM /YYYY')}
              </Text>
            )}
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
        <Flex variant='container.wide' py={['64px', '128px']} px={['20px', '64px', null, '0px']
        } sx={{}}>
          <Box pb='64px'>
            {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
          </Box>
          <Box sx={{width: '100%', m: '0 auto'}}>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </Box>
        </Flex>
      </Wrapper>
    </Box>

  )
}
