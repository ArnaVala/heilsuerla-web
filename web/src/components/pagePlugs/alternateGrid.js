/** @jsx jsx */
import {useContext} from 'react'

import {jsx, Box, Flex, Grid, Text, Context} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../atoms/portableText'

import TextLink from '../atoms/TextLink'
import HeroTextBlock from '../atoms/heroTextBlock'
import '../../styles/global.css'

import {Section, Wrapper} from '../common'

const AlternateGrid = ({block, raw}) => {
  const {eyebrow, heading, description, ctaLink, image, imageSide, items} = block

  const imageOrder = imageSide === 'left' ? 0 : 1

  return (
    <Section sx={{textAlign: 'center'}}>
      <Wrapper>
        <Grid columnGap={[null, null, '32px']} columns={[1, 1, 2]}>
          {image && (
            <Box
              as='img'
              src={image.url}
              sx={{order: [0, imageOrder], my: 'auto '}}
            />
          )}
          <Flex variant='container.column' sx={{justifyContent: 'center'}}>
            <Box
              sx={{py: ['64px', '96px', '128px'], px: ['16px', '32px', null], maxWidth: '720px', m: '0 auto'}}
            >
              <Text as='h5' variant='eyebrow'>
                {eyebrow}
              </Text>
              <Text as='h1' variant='hero'>
                {heading}
              </Text>
              <Box sx={{maxWidth: '540px'}}>
                <PortableText blocks={description} />
              </Box>
              {children}
            </Box>
          </Flex>

          <Box as='header'>
            {eyebrow && (
              <Text variant='eyebrow'>
                {eyebrow}
              </Text>
            )}
            {heading && (
              <Text variant='heading' >
                {heading}
              </Text>
            )}
            {raw.description && (
              <Box>
                <PortableText blocks={raw.description} />
              </Box>
            )}
            {
              ctaLink &&
                  ctaLink.map(({text, url, color}) => {
                    return <TextLink label={text} link={url} variant={color} />
                  })
            }
          </Box>
        </Grid>
      </Wrapper>
    </Section>
  )
}

export default AlternateGrid
