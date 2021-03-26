/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'
import {BackgroundImage} from '../molecules'
import PortableText from '../atoms/portableText'
import {Section, Wrapper} from '../common'

const Divider = ({block}) => {
  const {backgroundImage} = block
  return (
    <Section
      variant='container.full'
      sx={{
        alignItems: 'center',
        height: '96px'
      }}
    >
      <BackgroundImage
        image={backgroundImage}
        width={2400}
        height={1000}
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover'
        }}
      />
    </Section>
  )
}

export default Divider
