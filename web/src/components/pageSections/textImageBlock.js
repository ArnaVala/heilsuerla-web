
/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import PortableText from '../atoms/portableText'

const TextImageBlock = ({block, raw}) => {
  const {blockImageDirectionLeft, image, heading} = block
  return (
    <Grid columns={[1, 2, 2]}>
      {blockImageDirectionLeft ? (
        <Flex
          variant='container.column'
          sx={{gridRowStart: ['2', '1', null], justifyContent: 'center'}}
        >
          <Text as='h3' variant='subtitle' sx={{mb: 2, fontWeight: '500'}}>
            {heading}
          </Text>
          <PortableText blocks={raw.text} />
        </Flex>
      ) : (
        <Flex
          sx={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {image && image.asset && (
            <Box sx={{width: '100%', maxWidth: '480px'}}>
              <Image
                {...image}
                width={1200}
                height={1200}
                alt={image.alt}
                css={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </Box>
          )}
        </Flex>
      )}

      {blockImageDirectionLeft ? (
        <Flex sx={{justifyContent: 'center', alignItems: 'center'}}>
          {image && image.asset && (
            <Box sx={{width: '100%', maxWidth: '480px'}}>
              <Image
                {...image}
                width={1200}
                height={1200}
                alt={image.alt}
                css={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </Box>
          )}
        </Flex>
      ) : (
        <Flex
          variant='container.column'
          sx={{
            justifyContent: 'center'
          }}
        >
          <Text as='h3' variant='subtitle' sx={{mb: 2, fontWeight: '500'}}>
            {heading}
          </Text>
          <PortableText blocks={raw.text} />
        </Flex>
      )}
    </Grid>
  )
}

export default TextImageBlock
