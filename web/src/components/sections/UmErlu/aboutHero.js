
/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../atoms/portableText'

import {Section, Wrapper} from '../../common'

const AboutHero = () => {
  return (
    <Section bg='muted'>
      <Wrapper variant='container.wide'>
        <Grid columns={[1, 1, 2]}>
          <Flex variant='container.row'>
            <Text variant='eyebrow' >{eyebrow}</Text>
            <Text variant='title'>{heading}</Text>
            <Box sx={{maxWidth: '560px'}}><PortableText sx={{color: 'muted'}} blocks={_rawAboutIntro.description} />
            </Box>
          </Flex>
          {
            image && image.asset && (
              <Flex variant='container.row' sx={{justifyContent: 'center', height: '320px'}}>
                <Image
                  {...image}
                  width={1600}
                  height={1600}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </Flex>
            )
          }

        </Grid>
        <Grid variant='container.gridContainer'>
          <Flex sx={{alignItems: 'center'}}>
            <PortableText sx={{color: 'muted'}} blocks={_rawAboutIntro.description} />
          </Flex>
          <Box>{
            image && image.asset && (
              <Flex sx={{justifyContent: 'center', height: '100%'}}>
                <Image
                  {...image}
                  width={1600}
                  height={1600}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </Flex>
            )
          }
          </Box>
        </Grid>
      </Wrapper>
    </Section>

  )
}
export default AboutHero
