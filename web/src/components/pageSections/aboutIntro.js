/** @jsx jsx */
import {jsx, Box, Flex, Grid, Container} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import IntroTextBlock from '../atoms/introTextBlock'

import TextLink from '../atoms/TextLink'

const AboutIntro = ({block, raw}) => {
  const {eyebrow, heading, image, ctaLink} = block

  return (
    <Section>
      <Wrapper variant='container.wide'>
        <Flex sx={{flexDirection: ['column-reverse', null, 'row'], width: '100%'}}>
          <IntroTextBlock eyebrow={eyebrow} heading={heading} description={raw.description}>
            {ctaLink && (
              <Box sx={{mt: '32px'}}>
                <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                  {ctaLink.linkText}
                </TextLink>
              </Box>
            )
            }
          </IntroTextBlock>
          {image && image.asset && (
            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{maxWidth: ['320px', null, '520px']}}>
                <Image
                  {...image}
                  width={1600}
                  height={2000}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              </Box>
            </Flex>
          )}
        </Flex>
      </Wrapper>
    </Section>
  )
}
export default AboutIntro
