/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import HeaderTextBlock from '../atoms/headerTextBlock'

const HeilsumarkIntro = ({block}) => {
  const {heading, description, image, serviceList
  } = block

  return (
    <Section bg='primaryBg'>
      <Wrapper variant='container.wide'>
        <Box sx={{}}>
          <HeaderTextBlock heading={heading} description={description} />
          <Grid columns={['100%', '1fr 1fr', null]} sx={{mt: '64px'}}>
            <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain', maxWidth: '480px'}}
                />
              )}
            </Flex>
            <Flex sx={{flexDirection: 'column', justifyContent: 'center'}}>
              <Grid gap='32px' columns={1}>
                {serviceList.map((service = []) => {
                  const {name, description, _key} = service
                  return (
                    <Box sx={{width: '100%'}}>
                      <Flex
                        as='li'
                        sx={{flexDirection: 'column', margin: '0 auto', maxWidth: '560px'}}
                        key={_key}
                      >
                        <Text variant='subheading' sx={{mb: '8px'}}>
                          {name}
                        </Text>
                        <Text variant='body'>
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
export default HeilsumarkIntro
