/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'

const ImageTextList = ({block}) => {
  const {image, heading, serviceList} = block

  return (
    <Section bg='white'>
      <Wrapper variant='container.wide'>
        <Box sx={{}}>
          <Text variant='heading' sx={{textAlign: 'center'}}>
            {heading}
          </Text>
          <Grid columns={['100%', '1fr 1fr', null]}>
            <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain', maxWidth: '480px'}}
                />
              )}
            </Flex>
            <Flex sx={{flexDirection: 'column'}}>
              <Grid gap='32px' columns={1}>
                {serviceList.map((service = []) => {
                  const {name, description, _key} = service
                  return (
                    <Box sx={{width: '100%'}}>
                      <Flex as='li' sx={{flexDirection: 'column', margin: '0 auto', maxWidth: '560px'}} key={_key}>
                        <Text variant='subheading' sx={{mb: '8px'}}>
                          {name}
                        </Text>
                        <Text variant='body' color='primaryLight'>
                          {description}
                        </Text>
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
export default ImageTextList
