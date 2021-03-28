/** @jsx jsx */
import {jsx, Box, Grid, Flex, Card, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Eyebrow, TextLink} from '../../common'

const FeatureCard = ({image, eyebrow, heading, description, ctaLink, my}) => {
  return (
    <Card variant='feature'>
      <Box variant='container.wide' sx={{px: ['16px', '64px'], py: ['64px', '96px']}}>
        <Flex variant='container.row' sx={{flexDirection: ['column', 'column', 'row', 'row']}}>
          <Flex variant='container.column' sx={{justifyContent: 'center', alignSelf: 'center', height: '540px', maxHeight: ['360px', null, '400px', '480px'], flex: [1, 2]}}>

            <Box sx={{height: '100%', width: '100%', pb: '32px', pr: '32px'}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              )}
            </Box>
          </Flex>

          <Flex variant='container.column' sx={{maxWidth: '560px', flex: [1, 3]}}>
            <Eyebrow as='h3' children={eyebrow} />
            <Text as='h4' variant='title'>{heading}</Text>
            <Text as='p' variant='body'>{description}</Text>
            {ctaLink.url && ctaLink.linkText && (
              <Box>
                <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                  {ctaLink.linkText}
                </TextLink>
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
    </Card>
  )
}
export default FeatureCard
