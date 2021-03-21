
/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import PortableText from '../atoms/portableText'

import {Section, Wrapper} from '../common'

const TextImageBlock = ({block, raw}) => {
  const {blockImageDirectionLeft, image, heading} = block
  return (
    <Wrapper variant='container.wide'>
      <Flex sx={{flexDirection: ['column-reverse', null, 'row'], width: '100%'}}>
        {blockImageDirectionLeft ? (
          <Flex
            variant='container.column'
            sx={{justifyContent: 'center'}}
          >
            <Box sx={{py: ['32px', '48px', '64px'], px: ['16px', '32px', null], maxWidth: '720px', m: '0 auto'}}>
              <Text as='h3' variant='subtitle' sx={{mb: 2, fontWeight: '500'}}>
                {heading}
              </Text>
              <PortableText blocks={raw.text} />
            </Box>
          </Flex>
        ) : (
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {image && image.asset && (
              <Box sx={{width: '100%', maxWidth: '480px'}}>
                <Image
                  {...image}
                  width={1200}
                  height={1200}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </Box>
            )}
          </Flex>
        )}

        {blockImageDirectionLeft ? (
          <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
            {image && image.asset && (
              <Box sx={{width: '100%', maxWidth: '480px'}}>
                <Image
                  {...image}
                  width={1200}
                  height={1200}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </Box>
            )}
          </Flex>
        ) : (
          <Flex
            variant='container.column'
            sx={{
              justifyContent: 'center'
            }}
          >
            <Box sx={{py: ['32px', '48px', '64px'], px: ['16px', '32px', null], maxWidth: '720px', m: '0 auto'}}>
              <Text as='h3' variant='subtitle' sx={{mb: 2, fontWeight: '500'}}>
                {heading}
              </Text>
              <PortableText blocks={raw.text} />
            </Box>
          </Flex>
        )}
      </Flex>
    </Wrapper>
  )
}

export default TextImageBlock
