/** @jsx jsx */
import {jsx, Box, Flex, Card, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Eyebrow, TextLink} from '../../common'

const Illustration = ({image}) => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
        height: '100%',
        width: '100%',
        flexbasis: '100%',
        flex: [1, null, 2, null]

      }}
    >
      <Box p='32px' sx={{height: '100%', maxWidth: '320px'}}>
        {image && image.asset && (
          <Image
            {...image}
            alt={image.alt}
            css={{height: '100%', width: '100%', objectFit: 'contain'}}
          />
        )}
      </Box>
    </Flex>
  )
}
export default Illustration
