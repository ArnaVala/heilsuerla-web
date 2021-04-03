/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import {SectionTitle} from '../molecules'
const HeilsumarkIntro = ({block}) => {
  const {heading, eyebrow, description, image, serviceList
  } = block

  return (
    <Section variant='container.section'>
      <Wrapper
        variant='container.wide'>
        <SectionTitle sx={{alignSelf: 'center'}} heading={heading} description={description} />
        <Flex sx={{flexDirection: ['column', null, 'row', null], width: '100%'}}>
          <Flex pb='64px' variant='container.column' sx={{justifyContent: 'center'}}>
            <Box sx={{height: '560px', maxHeight: ['300px', '360px', '480px', '560px']}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              )}
            </Box>
          </Flex>
          <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Flex
              sx={{
                maxWidth: '560px',
                m: '0 auto',
                flexDirection: 'column'
              }}
            >
              {serviceList.map((service = []) => {
                const {name, description, _key} = service
                return (
                  <Box key={_key}>
                    <Text as='h3' variant='subheading'>
                      {name}
                    </Text>
                    <Text variant='body'>
                      {description}
                    </Text>
                  </Box>
                )
              })}
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>
    </Section>

  )
}
export default HeilsumarkIntro
