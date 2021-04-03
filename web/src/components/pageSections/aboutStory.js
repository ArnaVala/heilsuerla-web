/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import PortableText from '../atoms/portableText'
import {Section, Wrapper} from '../common'

const AboutStory = ({block, raw}) => {
  const {blockImageDirectionLeft, image, heading} = block
  return (
    <Box as='section' pb={['0px', null, '96px', '128px']}>
      <Wrapper variant='container.wide'>
        <Flex variant='container.row'sx={{flexDirection: ['column-reverse', null, 'row-reverse', null], width: '100%'}}>
          {blockImageDirectionLeft ? (
            <Flex variant='container.column' sx={{order: '0', justifyContent: 'center', alignItems: 'center', flex: [1, 3]}}>
              <Box
                sx={{
                  py: ['32px', '48px'],
                  maxWidth: '560px',
                  m: '0 auto'
                }}
              >
                <Text as='h3' variant='subheading'>
                  {heading}
                </Text>

                <PortableText blocks={raw.text} />
              </Box>
            </Flex>
          ) : (
            <Flex variant='container.column' sx={{order: ['1', null, '0'],
              justifyContent: 'center',
              alignItems: 'center',
              flex: [1, 2]}}>
              <Box py={['32px', null, '0px']} sx={{maxWidth: ['360px', null, '480px']}}>
                {
                  image && image.asset && (
                    <Image {...image}
                      height={1200}
                      width={1200}
                      alt={image.alt}
                      css={{width: '100%', height: '100%', objectFit: 'contain'}} />
                  )
                }

              </Box>
            </Flex>
          )}
          {blockImageDirectionLeft ? (
            <Flex
              variant='container.column'
              sx={{justifyContent: 'center', alignItems: 'center', flex: [1, 2]}}
            >
              <Box py={['32px', null, '0px']}sx={{maxWidth: ['360px', null, '480px']}}>
                {image && image.asset && (
                  <Image
                    {...image}
                    height={1200}
                    width={1200}
                    alt={image.alt}
                    css={{width: '100%', height: '100%', objectFit: 'contain'}}
                  />
                )}
              </Box>
            </Flex>

          ) : (
            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center', flex: [1, 3]}}>
              <Box
                sx={{
                  py: '32px',
                  maxWidth: '560px',
                  m: '0 auto'
                }}
              >
                <Text as='h3' variant='subheading'>
                  {heading}
                </Text>
                <PortableText blocks={raw.text} />
              </Box>
            </Flex>

          )}
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default AboutStory
