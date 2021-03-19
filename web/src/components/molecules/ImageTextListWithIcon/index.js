
/** @jsx jsx */
import {jsx, Box, Grid, Flex, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'

const ImageTextListWithIcon = ({block}) => {
  const {image, listWithIcon = []} = block

  return (
    <Grid columns={['100%', '1fr 1fr', null]}>
      <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
        {image && image.asset && (
          <Image
            {...image}
            alt={image.alt}
            css={{width: '100%', height: '100%', objectFit: 'contain', maxWidth: '480px'}}
          />
        )}
      </Flex>
      <Flex sx={{flexDirection: 'column'}}>
        <Grid gap='32px' columns={1}>
          {listWithIconList.map((listWithIcon => {
            return (
              <Box sx={{width: '100%'}}>
                {listWithIcon}
              </Box>
            )
          })}
        </Grid>
      </Flex>
    </Grid>

  )
}

export default ImageTextListWithIcon
