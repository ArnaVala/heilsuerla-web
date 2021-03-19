/** @jsx jsx */
import {jsx, Box, Flex, Grid} from 'theme-ui'
import Img from 'gatsby-image'

import '../../../styles/global.css'

const PageHead = ({title, eyebrow}) => {
  return (
    <Box as='section' bg='muted' variant='layout.container' sx={{m: '0', px: '32px', py: '96px'}}>
      <Flex sx={{width: '100%'}} >
        <Box>
          <Box variant='text.eyebrow'>
            {eyebrow}
          </Box>
          <Box variant='text.title' sx={{maxWidth: '480px'}}>Þitt {title}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default PageHead
