/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper, BigText} from '../common'
import HeaderTextBlock from '../atoms/headerTextBlock'
import {FiArrowRightCircle
} from 'react-icons/fi'

const HeilsumarkContent = ({block}) => {
  const {heading, description, image, bigTextOne, bigTextTwo, bigTextThree, listLeft, listRight, illustration} = block
  const firstImage = listLeft.image
  const secondImage = listRight.image

  return (
    <Section variant='container.full' bg='white' sx={{pb: 0, mb: 0}}>
      <Wrapper variant='container.section'>
        <Box>
          <HeaderTextBlock heading={heading} description={description} />
          <BigText bigText={bigTextOne} color='primaryLight' bg='primaryMuted' />
          <Grid columns={['100%', '100%', '1fr 1fr', null]} sx={{mt: '128px'}}>
            <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
              {firstImage && firstImage.asset && (
                <Image
                  {...firstImage}
                  alt={firstImage.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain', maxWidth: ['240px', '320px', '480px']}}
                />
              )}
            </Flex>
            <Flex variant='container.column' sx={{my: '32px', p: 0, m: '0 auto'}}>
              {listLeft.listWithIcon.map((item) => {
                return (
                  <Grid
                    columns={'24px 1fr'}
                    key={item._key}
                    sx={{maxWidth: '640px', my: '16px'}}
                  >
                    <Flex sx={{justifyContent: 'center', mr: '-24px'}}>
                      <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                    </Flex>
                    <Text variant='body' sx={{}}>{item}</Text>
                  </Grid>
                )
              })}
            </Flex>
          </Grid>
          <BigText bigText={bigTextTwo} color='primaryMuted' bg='primaryLight' />
          <Grid columns={['100%', '1fr 1fr', null]} sx={{mt: '128px'}}>
            <Flex sx={{flexDirection: 'column', justifyContent: 'center'}} >
              <Grid gap='32px' columns={1}>
                {listRight.listWithIcon.map((item) => {
                  return (
                    <Box sx={{width: '100%'}}>
                      <Flex
                        key={item._key}
                        sx={{margin: '0 auto', maxWidth: '560px'}}
                      >
                        <Box as='i'>
                          <FiArrowRightCircle color='#ff7476' fontSize='20px' />
                        </Box>
                        <Text sx={{pl: '24px'}} color='primaryLight'>{item}</Text>

                      </Flex>
                    </Box>
                  )
                })}
              </Grid>
            </Flex>
            <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
              {secondImage && secondImage.asset && (
                <Image
                  {...secondImage}
                  alt={secondImage.alt}
                  css={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    maxWidth: ['240px', '320px', null]
                  }}
                />
              )}
            </Flex>
          </Grid>
          <BigText bigText={bigTextThree} color='primaryLight' bg='primaryMuted' />
        </Box>

      </Wrapper>
      <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
        {illustration && illustration.asset && (
          <Image
            {...illustration}
            alt={illustration.alt}
            css={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              maxWidth: ['320px', '320px', '560px']
            }}
          />
        )}
      </Flex>
    </Section>
  )
}
export default HeilsumarkContent
