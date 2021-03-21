/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import PortableText from '../atoms/portableText'
import {Section, Wrapper} from '../common'

const AboutStory = ({block, raw}) => {
  const {blockImageDirectionLeft, image, heading} = block
  return (
    <Section as='section' bg='white' sx={{pb: 0}}>
      <Wrapper variant='container.wide'>
        <Grid columns={[1, 1, 2]}>
          {blockImageDirectionLeft ? (
            <Flex variant='container.column' sx={{gridRowStart: ['2', '2', '1', null], justifyContent: 'center'}}>
              <Text as='h3' variant='subtitle' sx={{mb: 2, fontWeight: '500'}}>{heading}</Text>
              <PortableText blocks={raw.text} />
            </Flex>
          ) : (
            <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{position: 'absolute',
                display: 'block',
                width: [null, '320px', '480px'],
                bg: 'accentMuted',
                height: [null, '320px', '480px'],
                zIndex: 1,
                ml: '32px',
                mt: '32px'}} />
              <Box
                sx={{
                  position: 'absolute',
                  display: 'block',
                  width: [null, '320px', '480px'],
                  bg: 'primaryLight',
                  height: [null, '320px', '480px'],
                  zIndex: 1,
                  ml: '-32px',
                  mt: '-32px'
                }}
              />

              {image && image.asset && (
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  maxWidth: [null, '320px', '480px'],
                  zIndex: 2,
                  py: '32px'
                }}>

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
              <Box sx={{position: 'absolute',
                display: 'block',
                width: [null, '320px', '480px'],
                bg: 'primaryMuted',
                height: [null, '320px', '480px'],
                zIndex: 1,
                ml: '32px',
                mt: '32px'}} />
              <Box
                sx={{
                  position: 'absolute',
                  display: 'block',
                  width: [null, '320px', '480px'],
                  bg: 'accent',
                  height: [null, '320px', '480px'],
                  zIndex: 1,
                  ml: '-32px',
                  mt: '-32px'
                }}
              />

              {image && image.asset && (
                <Box sx={{
                  width: '100%',
                  height: '100%',
                  maxWidth: [null, '320px', '480px'],
                  zIndex: 2,
                  py: '32px'
                }}>

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
            <Flex variant='container.column' sx={{
              justifyContent: 'center'}}>
              <Text as='h3' variant='subtitle' sx={{mb: 2, fontWeight: '500'}}>
                {heading}
              </Text>
              <PortableText blocks={raw.text} />
            </Flex>
          )}
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default AboutStory
