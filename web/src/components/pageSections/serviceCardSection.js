/** @jsx jsx */
import {Link as GatsbyLink} from 'gatsby'
import {jsx, Box, Grid, Flex, Card, Text, Link} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, TextLink, Wrapper} from '../common'

const ServiceCardSection = ({block}) => {
  const {sectionHeader, heilsumark, radgjof} = block
  return (
    <Section bg='muted'>
      <Wrapper variant='container.wide'>
        <Box>
          <Text variant='eyebrow' sx={{textAlign: 'center'}}>
            {sectionHeader.eyebrow}
          </Text>
          <Text variant='subtitle' sx={{textAlign: 'center'}}>
            {sectionHeader.heading}
          </Text>
        </Box>
        <Grid>
        <Grid columns={[1, 1, 2]} gap={'64px'} sx={{px: ['16px', null, '0px']}}>
          <Card variant='default'>
            <Flex sx={{flexDirection: ['column', null, 'row'], justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
              <Box variant='container.column'>
                <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
                  <Box sx={{height: '240px', maxHeight: '240px', mb: '64px'}}>
                    {heilsumark.image && heilsumark.image.asset && (
                      <Image
                        {...heilsumark.image}
                        alt={heilsumark.image.alt}
                        css={{width: '100%', height: '100%', objectFit: 'contain'}}
                      />
                    )}
                  </Box>
                </Flex>
              </Box>
              <Flex variant='container.column' sx={{textAlign: 'left'}}>
                <Text variant='eyebrow'>{heilsumark.eyebrow}</Text>
                <Text variant='subtitle' sx={{mb: '16px'}}>{heilsumark.heading}</Text>
                <Text variant='body' sx={{my: '16px'}}>{heilsumark.description}</Text>
                <Box sx={{my: '32px'}}>
                  <GatsbyLink sx={{py: '12px',
                    px: '24px',
                    color: 'primary',
                    bg: 'accent',
                    '&:hover': {
                      color: 'primaryMuted',
                      bg: 'primary'
                    }}} to={heilsumark.ctaLink.url}>{heilsumark.ctaLink.linkText}</GatsbyLink>

                </Box>
              </Flex>

            </Flex>
          </Card>
          <Card variant='default' sx={{my: '32px'}}>
            <Flex sx={{flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
              <Text variant='eyebrow'>{radgjof.eyebrow}</Text>
              <Text variant='heading'>{radgjof.heading}</Text>

            </Flex>
          </Card>

        </Grid>
      </Wrapper>
    </Section>
  )
}
export default ServiceCardSection
