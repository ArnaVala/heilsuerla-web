/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper, BigText} from '../common'
import {SectionTitle} from '../molecules'
import {FiArrowRightCircle
} from 'react-icons/fi'

const HeilsumarkContent = ({block}) => {
  const {heading, description, image, bigTextOne, bigTextTwo, bigTextThree, listLeft, listRight, illustration} = block
  const firstImage = listLeft.image
  const secondImage = listRight.image

  return (
    <Section mb='0px'>
      <Wrapper variant='container.wide'>
        <SectionTitle sx={{alignSelf: 'center'}} heading={heading} description={description} />
        <Flex sx={{flexDirection: ['column', null, 'row', null], width: '100%'}}>
          <Flex variant='container.column' mb='96px' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{maxWidth: ['300px', '360px', null, '520px']}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              )}
            </Box>
          </Flex>
          <Flex variant='container.column' sx={{justifyContent: 'center'}}>
            <Box
              sx={{
                maxWidth: '560px',
                m: '0 auto'
              }}
            >
              <Text as='h4' variant='subheading'>{bigTextOne}</Text>
              <Text variant='body'>Saman vinnum við að því að skoða og meta hvernig margvíslegir þættir hafa áhrif á heilsu þína – hvaða þættir það eru sem stuðla að ójafnvægi í þínu lífi og hafa neikvæð áhrif á heilsu þína.</Text>

            </Box>
          </Flex>
        </Flex>

        <BigText bigText={bigTextTwo} color='primaryLight' bg='primaryMuted' />
        <Flex my='128px' sx={{flexDirection: ['column-reverse', null, 'row', null], width: '100%'}}>
          <Flex variant='container.column' sx={{justifyContent: 'center'}}>
            <Box
              sx={{
                maxWidth: '560px',
                m: '0 auto'
              }}
            >
              {listRight.listWithIcon.map((item) => {
                return (
                  <Flex key={item._key} sx={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <Box sx={{height: '32px', minWidth: '40px'}}>
                      <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                    </Box>
                    <Text variant='body' sx={{}}>
                      {item}
                    </Text>
                  </Flex>
                )
              })}
            </Box>
          </Flex>
          <Flex py='32px' variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{maxWidth: ['280px', '360px', null, '520px']}}>
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
        <BigText bigText={bigTextThree} color='primaryLight' bg='accentMuted' />
        <Flex
          mt='128px'
          sx={{
            flexDirection: ['column', null, 'row', null],
            width: '100%'
          }}
        >
          <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box pb='64px' sx={{maxWidth: ['280px', '360px', null, '520px']}}>
              {secondImage && secondImage.asset && (
                <Image
                  {...secondImage}
                  alt={secondImage.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              )}
            </Box>
          </Flex>
          <Flex variant='container.column' sx={{justifyContent: 'center'}}>
            <Box
              sx={{
                maxWidth: '560px',
                mx: 'auto'
              }}
            >
              {listLeft.listWithIcon.map((item) => {
                return (
                  <Flex
                    key={item._key}
                    sx={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}
                  >
                    <Box sx={{height: '32px', minWidth: '40px'}}>
                      <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                    </Box>
                    <Text variant='body' sx={{}}>
                      {item}
                    </Text>
                  </Flex>

                )
              })}
            </Box>
          </Flex>

        </Flex>
        <BigText color='primaryLight' bigText='Að ná góðri heilsu er ferðalag en ekki áfangastaður, við tökum eitt skref í einu.' />
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
