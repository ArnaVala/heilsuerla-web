/** @jsx jsx */
import {jsx, Box, Flex, Grid, Card, Text} from 'theme-ui'
import {imageUrlFor} from '../../lib/image-url'

import {Section, Wrapper} from '../common'
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
            <Box
              variant='text.eyebrow'
              sx={{
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                py: ['16px'],
                pb: ['32px', '64px'],
                px: ['16px'],
                m: '0 auto',
                maxWidth: '720px'
              }}
            >
              {eyebrow}
            </Box>

            <Flex variant='container.row' sx={{flexDirection: ['column', null, 'row', null], width: '100%', columnGap: '32px', rowGap: '64px'}}>
              <Flex variant='container.column' sx={{justifyContent: 'flex-start'}}>
                <Box
                  sx={{
                    maxWidth: '560px',
                    m: '0 auto'
                  }}
                >
                  <Text variant='subtitle' sx={{mb: '32px'}}>
                    {heading}
                  </Text>

                  <Text variant='bigBody' sx={{fontSize: '20px'}}>
                    {description}
                  </Text>
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
                  {listWithIcon.map((item) => {
                    return (
                      <Grid columns={'24px 1fr'} key={item._key}>
                        <Flex sx={{justifyContent: 'center', mr: '-24px'}}>
                          <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                        </Flex>
                        <Text variant='body' sx={{}}>
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
