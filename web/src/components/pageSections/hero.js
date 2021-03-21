/** @jsx jsx */
import {jsx, Box, Flex, Grid} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import TextLink from '../atoms/TextLink'
import HeroTextBlock from '../atoms/heroTextBlock'
import '../../styles/global.css'

const Hero = ({block, raw}) => {
  const {ctaLink, image, eyebrow, heading} = block

  return (
    <Box as='section' variant='layout.container' sx={{m: '0'}}>
      <Flex sx={{flexDirection: ['column-reverse', null, 'row'], width: '100%'}}>
        <HeroTextBlock eyebrow={eyebrow} heading={heading} description={raw.description}>
          <Box sx={{mt: '32px'}}>
            <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
              {ctaLink.linkText}
            </TextLink>
          </Box>
        </HeroTextBlock>
        <Box variant='container.column' sx={{minHeight: '50vw'}}>
          {
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
          }

        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
