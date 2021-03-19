/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import PortableText from '../atoms/portableText'
import {Section, Wrapper} from '../common'

const Divider = ({block}) => {
  const {backgroundImage} = block
  return (
    <Section
      as='hr'
      variant='container.full'
      alt={image}
      sx={{
        backgroundImage: `url(${image.asset.url})`,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '48px',
        width: '100vw'
      }}
    />
  )
}

export default Divider
