/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../atoms/portableText'

import {Section, Wrapper} from '../../common'
import TextImageBlock from '../../molecules/TextImageBlock/index'

const AboutText = () => {
  return (
    <Section bg='muted'>
      <Wrapper variant='container.wide' />
    </Section>
  )
}
export default AboutText
