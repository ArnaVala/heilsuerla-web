import React from 'react'
import PortableText from '../components/atoms/portableText'
import {Container, Flex, Grid, Box, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

function Abouts (props) {
  const {about} = props
  const {_rawAboutIntro, aboutIntro} = about
  const {heading, eyebrow} = aboutIntro
  return (
    <Box as='section' bg='muted' variant='container.section'>
      <Grid columns={['1fr 1fr']}>
        <Box>
          <Text variant={'eyebrow'}>{eyebrow}</Text>
          <Text variant={'heading'}>{heading}</Text>
          <PortableText blocks={_rawAboutIntro.description} />
        </Box>
        <Box>image</Box>
      </Grid>
    </Box>
  )
}

export default Abouts
