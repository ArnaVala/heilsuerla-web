
/** @jsx jsx */
import PortableText from '../atoms/portableText'

import {jsx, Flex, Box, Text} from 'theme-ui'

const IntroTextBlock = ({eyebrow, heading, description}) => {
  return (
    <Flex variant='container.column'>
      <Text variant='eyebrow'>{eyebrow}</Text>
      <Text variant='title'>{heading}</Text>
      <Box sx={{maxWidth: '560px'}}>
        <PortableText blocks={description} />
      </Box>
    </Flex>

  )
}

export default IntroTextBlock
