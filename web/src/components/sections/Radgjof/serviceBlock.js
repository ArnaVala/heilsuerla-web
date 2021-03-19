
/** @jsx jsx */
import {jsx, Box, Container, Flex, Grid, Text} from 'theme-ui'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../atoms/portableText'

import {Section, Wrapper} from '../../common'

const ServiceBlock = () => {
  return (
    <Section bg='muted'>
      <Wrapper variant='container.wide'>
        <Box mb='128px'>
          <Text variant='eyebrow'>{eyebrow}</Text>
          <Text variant='title'>{headline}</Text>
          <Text as='h1' variant='description'>{description}</Text>
        </Box>
        <Box sx={{}}>
          <Text variant='heading' sx={{textAlign: 'center'}}>{heading}</Text>
          <Grid columns={['100%', '1fr 1fr', '1fr 1fr']}>
            <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
              {image && image.asset && (
                <Image {...image} alt={image.alt} css={{width: '100%', height: '100%', objectFit: 'contain', maxWidth: '560px'
                }} />
              )}
            </Flex>
            <Flex sx={{flexDirection: 'column'}}>
              <Grid gap='32px' columns={1}>
                {serviceList.map((service = []) => {
                  const {name, description, _key} = service
                  return (
                    <Box sx={{maxWidth: '560px', px: '16px'}}>
                      <Flex as='li' sx={{flexDirection: 'column'}} key={_key}>
                        <Text variant='subheading' sx={{mb: '8px'}}>
                          {name}
                        </Text>
                        <Text variant='body' color='primaryLight'>{description}</Text>
                      </Flex>
                    </Box>
                  )
                })}
              </Grid>
            </Flex>
          </Grid>
          <Box />
        </Box>
      </Wrapper>
    </Section>
  )
}
export default ServiceBlock
