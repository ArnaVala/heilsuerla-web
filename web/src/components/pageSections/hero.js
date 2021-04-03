/** @jsx jsx */
import buildImageObj from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import {urlFor} from '@sanity/image-url'
import Image from 'gatsby-plugin-sanity-image'

import {jsx, Box, Flex, Grid} from 'theme-ui'
import PortableText from '../atoms/portableText'

import '../../styles/global.css'

import {Section, TextLink, Eyebrow, HeroTitle} from '../common'
import {BackgroundImage} from '../molecules'

const Hero = ({block, raw}) => {
  const {ctaLink, image, eyebrow, backgroundImage, heading} = block

  return (
    <Section variant='container.full'>
      <Grid gap={0} columns={[1, null, 2, null]} >
        <Flex
          px={['20px', '32px', '48px', '64px']}
          pt={['32px', '64px', null, '96px']}
          pb={['64px', '96px']}
          sx={{
            width: '100%',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            order: [1, null, 0, null]
          }}
        >
          <Flex sx={{flexDirection: 'column', width: '100%', maxWidth: '560px'
          }}>
            <Eyebrow as='h1'>{eyebrow}</Eyebrow>
            <Box>
              <HeroTitle
                as='h2'
                variant='hero'
                children={heading}
              />
              <Box sx={{maxWidth: '480px'}} >
                <PortableText blocks={raw.description} />
              </Box>
            </Box>
            <Box>
              <TextLink
                toLink={ctaLink.url}
                data-text={ctaLink.linkText}
              >
                {ctaLink.linkText}
              </TextLink>
            </Box>
          </Flex>
        </Flex>

        <Flex
          variant='container.column'
          sx={{
            alignItems: 'center'
          }}
        >
          <BackgroundImage
            image={backgroundImage}
            width={1920}
            height={1080}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover'
            }}
          >
            {image && image.asset && (
              <Flex
                sx={{
                  width: '100%',
                  p: ['20px', '32px', '48px', '64px'],
                  height: ['320px', '560px', '640px', '100%']}}>
                <Image
                  {...image}
                  width={1600}
                  height={1600}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </Flex>

            )}
          </BackgroundImage>
        </Flex>
      </Grid>
    </Section>
  )
}

export default Hero

/* {
  image && image.asset && (
    <Flex sx={{justifyContent: 'center', height: ['320px', '50vh', '100%']}}>
      <Image
        {...image}
        width={1600}
        height={1600}
        alt={image.alt}
        css={{width: '100%', height: '100%', objectFit: 'cover'}}
      />
    </Flex>
  )
} */
