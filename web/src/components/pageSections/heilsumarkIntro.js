/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import {SectionTitle} from '../molecules'
const HeilsumarkIntro = ({block}) => {
  const {heading, eyebrow, description, image, serviceList
  } = block

  return (
    <Section mb='0px'>
      <Wrapper
        variant='container.wide'
        sx={{
          px: ['20px', '64px']
        }}
      >
        <SectionTitle sx={{alignSelf: 'center'}} heading={heading} description={description} />

        <Flex variant='container.row' mt='32px' sx={{flexDirection: ['column', null, 'row', null], width: '100%', columnGap: '32px', rowGap: '64px'}}>
          <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{maxHeight: ['360px', null, '520px']}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              )}
            </Box>
          </Flex>

          <Flex variant='container.column' sx={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Flex
              sx={{
                maxWidth: '560px',
                m: '0 auto',
                rowGap: '32px',
                flexDirection: 'column'
              }}
            >
              {serviceList.map((service = []) => {
                const {name, description, _key} = service
                return (
                  <Box key={_key}>
                    <Text variant='subheading' color='primaryLight'>
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
