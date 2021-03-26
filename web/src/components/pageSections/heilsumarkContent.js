/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper, BigText} from '../common'
import {SectionTitle} from '../molecules'
import HeaderTextBlock from '../atoms/headerTextBlock'
import {FiArrowRightCircle
} from 'react-icons/fi'

const HeilsumarkContent = ({block}) => {
  const {heading, description, image, bigTextOne, bigTextTwo, bigTextThree, listLeft, listRight, illustration} = block
  const firstImage = listLeft.image
  const secondImage = listRight.image

  return (
    <Section mb='0px'>
      <Wrapper
        variant='container.wide'
        sx={{
          px: ['20px', '64px']
        }}
      >
        <SectionTitle sx={{alignSelf: 'center'}} heading={heading} description={description} />

        <Flex variant='container.row' sx={{flexDirection: ['column', null, 'row', null], width: '100%', columnGap: '32px', rowGap: '64px'}}>
          <Flex variant='container.column' my='64px' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{maxWidth: ['360px', null, '520px']}}>
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
              <Text variant='subheading' color='primaryLight'>{bigTextOne}</Text>
              <Text variant='bigBody'>Saman vinum við að því að skoða og meta hvernig margvíslegir þættir hafa áhrif á heilsu þína, og hvaða þættir það eru sem stuðla að ójafnvægi í þínu lífi og hafa neikvæð áhrif á heilsu þína.</Text>

            </Box>
          </Flex>
        </Flex>

        <BigText bigText={bigTextTwo} color='primaryLight' bg='primaryMuted' />
        <Flex variant='container.row' my='64px' sx={{flexDirection: ['column-reverse', null, 'row', null], width: '100%', columnGap: '32px', rowGap: '64px'}}>
          <Flex variant='container.column' sx={{justifyContent: 'center'}}>
            <Box
              sx={{
                maxWidth: '560px',
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
        <BigText bigText={bigTextThree} color='primaryLight' bg='accentMuted' />
        <Flex
          variant='container.row'
          my='64px'
          sx={{
            flexDirection: ['column', null, 'row', null],
            width: '100%',
            columnGap: '32px',
            rowGap: '64px'
          }}
        >
          <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{maxWidth: ['360px', null, '520px']}}>
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
                m: '0 auto'
              }}
            >
              {listLeft.listWithIcon.map((item) => {
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
