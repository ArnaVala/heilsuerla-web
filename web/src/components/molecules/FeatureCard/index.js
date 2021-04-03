/** @jsx jsx */
import {jsx, Box, Flex, Card, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Eyebrow, TextLink} from '../../common'
import Illustration from './illustration'

const FeatureCard = ({image, eyebrow, heading, description, ctaLink, my}) => {
  return (
    <Card variant='feature'>
      <Flex variant='container.row' sx={{flexDirection: ['column', 'column', 'row', 'row'], justifyContent: 'center', alignItems: 'center'}}>
        <Illustration image={image} />
        <Flex variant='container.card' sx={{px: '0px', flex: [1, null, 3, null]}}>
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
    </Card>
  )
}
export default FeatureCard
