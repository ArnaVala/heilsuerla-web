/** @jsx jsx */
import {jsx, Box, Flex, Grid} from 'theme-ui'
import Img from 'gatsby-image'
import IntroTextBlock from '../../atoms/introTextBlock'
import '../../../styles/global.css'
import PortableText from '../../atoms/portableText'
import Image from 'gatsby-plugin-sanity-image'

const Intro = ({block, raw}) => {
  const {eyebrow, heading} = block
  return (
    <Box as='section' variant='layout.container' sx={{m: '0'}}>
      <Grid columns={[1, null, 2, 2]} gap={0} sx={{width: '100%'}}>
        <Flex variant='container.textCol' sx={{py: ['32px', '32px', '64px']}}>
          <Box as='h5' variant='text.eyebrow' sx={{pt: ['32px', '32px', null, '64px']}}>
            {eyebrow}
          </Box>
          <Box as='h3' sx={{fontFamily: 'heading', fontWeight: '500', fontSize: '40px', mb: '32px'}}>
            {heading}
          </Box>
          <Box as='h3' sx={{fontFamily: 'heading', fontWeight: '500', fontSize: '40px', mb: '32px'}}>
            <PortableText blocks={raw.description} />
          </Box>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Intro
