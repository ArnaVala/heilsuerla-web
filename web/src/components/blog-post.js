import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import PortableText from '../components/atoms/portableText'
import AuthorList from '../components/atoms/author-list'
import {Container, Flex, Grid, Box} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

function BlogPost (props) {
  const {_rawBody, _rawExcerpt, authors, title, image, publishedAt} = props
  return (
    <Container as='section' variant='container.full'>
      <Box variant='container.wrapper' bg='primaryBg'>
        {image && image.asset && (
          <Box as='header' variant='container.innerWrapper' sx={{pt: '128px', pb: '64px'}}>
            <Box sx={{mb: '64px'}}>
              <Box variant='text.title' color='primary' sx={{mb: '16px'}}>
                {title}
              </Box>
            </Box>
            <Grid variant='container.gridContainer' sx={{textAlign: 'left'}}>
              <Flex
                as='p'
                sx={{
                  maxWidth: '560px',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  margin: '0 auto'
                }}
              >
                {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
              </Flex>

              <Flex sx={{justifyContent: 'center'}}>
                <Image
                  {...image}
                  width={1920}
                  height={1920}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'cover', maxWidth: '480px'}}
                />
              </Flex>
            </Grid>
          </Box>
        )}
      </Box>
      <Flex as='article' variant='container.flex' sx={{width: '100%'}}>
        <Box variant='container.blog'>
          <div>{_rawBody && <PortableText blocks={_rawBody} />}</div>
          {publishedAt && (
            <div>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do, YYYY')}
            </div>
          )}
        </Box>
        <Box variant='container.wide'>
          {authors && <AuthorList items={authors} title='Authors' />}
        </Box>
      </Flex>
    </Container>
  )
}

export default BlogPost
