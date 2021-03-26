/** @jsx jsx */
import {jsx, Box, Grid, Flex, Card, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {TextLink} from '../../common'

const FeatureCard = ({image, eyebrow, heading, description, ctaLink, my}) => {
  return (
    <Card variant='feature'>
      <Grid sx={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '0', py: '96px'}}>
        <Flex
          sx={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: ['2 / span 10', null, '2 / span 4']
          }}
        >
          <Box sx={{height: '360px'}}>
            {image && image.asset && (
              <Image
                {...image}
                alt={image.alt}
                css={{width: '100%', height: '100%', objectFit: 'contain'}}
              />
            )}
          </Box>
        </Flex>
        <Flex variant='container.textCol' sx={{gridColumn: ['2 / span 10', '2 / span 10',
          '7 / span 5', null]
        }}>
          <Text variant='eyebrow'>{eyebrow}</Text>
          <Text variant='heading'>{heading}</Text>
          <Text variant='body'>{description}</Text>
          {ctaLink.url && ctaLink.linkText && (
            <Box>
              <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                {ctaLink.linkText}
              </TextLink>
            </Box>
          )}
        </Flex>
      </Grid>
    </Card>
  )
}
export default FeatureCard
