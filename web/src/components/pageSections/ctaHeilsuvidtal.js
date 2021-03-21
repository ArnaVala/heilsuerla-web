/** @jsx jsx */
import {jsx, Box, Flex, Grid, Card, Text} from 'theme-ui'
import {imageUrlFor} from '../../lib/image-url'

import {Section, Wrapper} from '../common'
import {FiArrowRightCircle} from 'react-icons/fi'
import PortableText from '../atoms/portableText'
import TextLink from '../atoms/TextLink'

const CtaHeilsuvidtal = ({block, raw}) => {
  const {
    eyebrow, heading, description, listWithIcon, ctaLink, backgroundImage
  } = block

  return (
    <Box as='section' variant='container.full'>
      <Flex
        {... backgroundImage}
        variant='container.full'
        alt={backgroundImage.alt}
        sx={{
          py: '96px',
          px: [0, '32px', '64px'],
          backgroundImage: `url(${imageUrlFor(backgroundImage)
            .width(1920)
            .height(1600)
            .auto('format')
            .url()}
            )`
        }}
      >
        <Wrapper variant='container.wide' >
          <Card variant='default' bg='white' sx={{m: '0 auto'}}>
            <Box
              sx={{
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                py: ['16px'],
                px: ['16px'],
                m: '0 auto',
                maxWidth: '840px'
              }}
            >
              <Text variant='eyebrow' sx={{mb: '32px'}}>
                {eyebrow}
              </Text>
              <Text variant='title' sx={{mb: '32px'}}>
                {heading}
              </Text>
            </Box>

            <Grid columns={[1, 1, 2, null]}>

              <Flex variant='container.column' sx={{
                justifyContent: 'center',
                alignItems: 'center',
                p: '16px',
                maxWidth: '540px',
                margin: '0 auto'}}>
                <Text variant='subheading' sx={{mb: '32px'}}>
                  {description}
                </Text>
              </Flex>

              <Flex variant='container.column' sx={{
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '540px',
                p: '16px',
                m: '0 auto'}}>
                {listWithIcon.map((item) => {
                  return (
                    <Grid columns={'24px 1fr'} key={item._key} sx={{my: '16px'}}>
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
            </Grid>

            <Flex sx={{justifyContent: 'center', alignItems: 'center', mt: '32px'}}>
              <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                {ctaLink.linkText}
              </TextLink>
            </Flex>
          </Card>
        </Wrapper>
      </Flex>
    </Box>
  )
}
export default CtaHeilsuvidtal
