/** @jsx jsx */
import {jsx, Box, Flex, Grid, Container} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import IntroTextBlock from '../atoms/introTextBlock'

const AboutIntro = ({block, raw}) => {
  const {eyebrow, heading, image} = block

  return (
    <Section>
      <Wrapper
        variant='container.wide'
        sx={{
          px: ['20px', '64px']
        }}
      >
        <Flex variant='container.row' sx={{flexDirection: ['column-reverse', null, 'row', null], width: '100%', columnGap: '32px', rowGap: '64px'}}>
          <IntroTextBlock eyebrow={eyebrow} heading={heading} description={raw.description} />
          {image && image.asset && (
            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center', flex: [1, 1, 2]}}>
              <Box sx={{maxWidth: ['360px', null, '520px']}}>
                {image && image.asset && (
                  <Image
                    {...image}
                    alt={image.alt}
                    css={{width: '100%', height: '100%', objectFit: 'contain'}}
                  />
                )}
              </Box>
            </Flex>

          )}
        </Flex>
      </Wrapper>
    </Section>
  )
}
export default AboutIntro
