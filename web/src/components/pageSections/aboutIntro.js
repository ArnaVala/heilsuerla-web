/** @jsx jsx */
import {jsx, Box, Flex, Grid, Container} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import IntroTextBlock from '../atoms/introTextBlock'

const AboutIntro = ({block, raw}) => {
  const {eyebrow, heading, image} = block

  return (
    <Section>
      <Wrapper variant='container.wide'>
        <Flex variant='container.row' sx={{flexDirection: ['column-reverse', null, 'row', null], width: '100%'}}>
          <IntroTextBlock eyebrow={eyebrow} heading={heading} description={raw.description} />
          {image && image.asset && (
            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center', flex: [1, 3, 3, 1]}}>
              <Box my='64px' sx={{height: ['360px', '440px', null, '560px']}}>
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
