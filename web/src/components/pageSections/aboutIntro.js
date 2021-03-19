/** @jsx jsx */
import {jsx, Flex, Grid} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import IntroTextBlock from '../atoms/introTextBlock'

const AboutIntro = ({block, raw}) => {
  const {eyebrow, heading, image} = block

  return (
    <Section bg='muted'>
      <Wrapper variant='container.wide'>
        <Grid columns={[1, 1, 2]}>
          <IntroTextBlock eyebrow={eyebrow} heading={heading} description={raw.description} />
          {image && image.asset && (
            <Flex variant='container.row' sx={{justifyContent: 'center', height: ['320px', null, '100%']}}>
              <Image
                {...image}
                width={1600}
                height={1600}
                alt={image.alt}
                css={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </Flex>
          )}
        </Grid>
      </Wrapper>
    </Section>
  )
}
export default AboutIntro
