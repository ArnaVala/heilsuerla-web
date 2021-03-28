/** @jsx jsx */
import {Link as GatsbyLink} from 'gatsby'
import {jsx, Box, Grid, Flex, Card, Text, Link} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper, Eyebrow} from '../common'
import {FeatureCard, SectionTitle} from '../molecules'

const HomeServices = ({block}) => {
  const {sectionHeader, heilsumark, radgjof} = block
  return (
    <Section bg='primaryBg'>
      <Wrapper variant='container.wide' sx={{m: '0 auto', px: ['16px', '64px', null, '0px']}}>
        <SectionTitle eyebrow={sectionHeader.eyebrow} heading={sectionHeader.eyebrow} description={sectionHeader.heading} />
        <Grid columns={[1]} gap={['64px', null]}>
          <FeatureCard
            image={heilsumark.image}
            ctaLink={heilsumark.ctaLink}
            eyebrow={heilsumark.eyebrow}
            heading={heilsumark.heading}
            description={heilsumark.description}
          />

          <FeatureCard
            image={radgjof.image}
            ctaLink={radgjof.ctaLink}
            eyebrow={radgjof.eyebrow}
            heading={radgjof.heading}
            description={radgjof.description}
          />
        </Grid>
      </Wrapper>
    </Section>
  )
}
export default HomeServices
