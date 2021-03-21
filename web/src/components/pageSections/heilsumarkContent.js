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
    <Section mb='0px'>
      <Wrapper variant='container.wide'>
        <Box>
          <HeaderTextBlock heading={heading} description={description} />
          <BigText bigText={bigTextOne} color='primaryLight' bg='transparent' />
          <Flex sx={{flexDirection: ['column', null, 'row'], width: '100%'}}>
            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{maxWidth: ['360px', null, '520px']}}>
                {secondImage && secondImage.asset && (
                  <Image
                    {...secondImage}
                    alt={secondImage.alt}
                    css={{width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />

                )}
              </Box>
            </Flex>
            <Flex variant='container.column' sx={{justifyContent: 'center'}}>
              <Box sx={{py: ['32px', '48px', '64px'], px: ['16px', '32px', null], maxWidth: '640px', m: '0 auto'}}>
                {listLeft.listWithIcon.map((item) => {
                  return (
                    <Grid
                      columns={'24px 1fr'}
                      key={item._key}
                      sx={{my: '16px'}}
                    >
                      <Flex sx={{justifyContent: 'center', mr: '-24px'}}>
                        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                      </Flex>
                      <Text variant='body' sx={{}}>{item}</Text>
                    </Grid>
                  )
                })}
              </Box>
            </Flex>
          </Flex>
          <BigText bigText={bigTextTwo} color='primaryLight' bg='transparent' />
          <Flex sx={{flexDirection: ['column-reverse', null, 'row'], width: '100%'}}>
            <Flex variant='container.column' sx={{justifyContent: 'center'}}>
              <Box
                sx={{
                  py: ['32px', '48px', '64px'],
                  px: ['16px', '32px', null],
                  maxWidth: '640px',
                  m: '0 auto'
                }}
              >
                {listRight.listWithIcon.map((item) => {
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
              </Box>
            </Flex>

            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{maxWidth: ['360px', null, '520px']}}>
                {firstImage && firstImage.asset && (
                  <Image
                    {...firstImage}
                    alt={firstImage.alt}
                    css={{width: '100%', height: '100%', objectFit: 'contain'}}
                  />
                )}
              </Box>
            </Flex>
          </Flex>
          <BigText bigText={bigTextThree} color='primaryLight' bg='transparent' />
        </Box>

      </Wrapper>
      <Flex sx={{justifyContent: 'center', alignItems: 'center', mb: ['-64px', '-96px', '-128px'], mt: '64px'}}>
        {illustration && illustration.asset && (
          <Image
            {...illustration}
            alt={illustration.alt}
            css={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              maxWidth: ['320px', '480px', '720px']
            }}
          />
        )}
      </Flex>
    </Section>
  )
}
export default HeilsumarkContent
