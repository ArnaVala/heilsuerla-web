/** @jsx jsx */
import {jsx, Box, Flex, Grid, Card, Text} from 'theme-ui'
import {imageUrlFor} from '../../lib/image-url'

import {Section, Wrapper, Eyebrow} from '../common'
import {FiArrowRightCircle} from 'react-icons/fi'
import TextLink from '../atoms/TextLink'

const CtaHeilsuvidtal = ({block, raw}) => {
  const {
    eyebrow, heading, description, listWithIcon, ctaLink, backgroundImage
  } = block

  return (
    <Section variant='container.full'>
      <Flex
        {... backgroundImage}
        variant='container.full'
        alt={backgroundImage.alt}
        sx={{
          backgroundImage: `url(${imageUrlFor(backgroundImage)
            .width(1920)
            .height(1600)
            .auto('format')
            .url()}
            )`
        }}
      >
        <Wrapper
          variant='container.wide'
          sx={{
            px: ['20px', '32px', '64px', '0px'],
            py: ['64px', null, '96px']
          }}
        >
          <Card variant='feature' bg='white' sx={{width: '100%', py: '64px', px: ['16px', '64px']}}>
            <Eyebrow children={eyebrow} />

            <Flex variant='container.row' sx={{flexDirection: ['column', null, 'row', null], gap: ['32px'], width: '100%', height: '100%'}}>
              <Flex variant='container.column' >
                <Box
                  sx={{
                    maxWidth: '560px',
                    m: '0 auto'
                  }}
                >
                  <Text variant='title' >
                    {heading}
                  </Text>

                  <Text variant='bigBody'>
                    {description}
                  </Text>
                </Box>
              </Flex>

              <Flex variant='container.column' sx={{flexDirection: 'row', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
                <Flex
                  sx={{
                    maxWidth: '560px',
                    m: '0 auto',
                    flexDirection: 'column'
                  }}
                >
                  {listWithIcon.map((item) => {
                    return (
                      <Grid gap={'16px'} columns={'24px 1fr'} key={item._key}>
                        <Flex sx={{justifyContent: 'center'}}>
                          <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                        </Flex>
                        <Text variant='body'>
                          {item}
                        </Text>
                      </Grid>
                    )
                  })}
                </Flex>
              </Flex>
            </Flex>

            <Flex sx={{justifyContent: 'center', alignItems: 'center', mt: '64px'}}>
              <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                {ctaLink.linkText}
              </TextLink>
            </Flex>
          </Card>
        </Wrapper>
      </Flex>
    </Section>
  )
}
export default CtaHeilsuvidtal
