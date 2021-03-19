/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-plugin-sanity-image'
import PortableText from '../../atoms/portableText'

import {Section, Wrapper} from '../../common'
import TextImageBlock from '../../molecules/TextImageBlock/index'

const AboutText = () => {
  const aboutDesc = useStaticQuery(query)
  const {aboutText} = aboutDesc.sanityAuthor

  return (
    <Section bg='muted'>
      <Wrapper variant='container.wide' />
    </Section>
  )
}
export default AboutText

export const query = graphql`
  query AboutDescQuery {
    sanityAuthor(slug: {current: {eq: "erla-gudmundsdottir"}}) {
      ...SanityAbout
    }
  }
`
