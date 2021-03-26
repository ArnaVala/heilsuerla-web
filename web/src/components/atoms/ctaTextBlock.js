
/** @jsx jsx */
import PortableText from '../atoms/portableText'

import {jsx, Flex, Box, Text} from 'theme-ui'
import {Eyebrow} from '../common'

const CtaTextBlock = ({eyebrow, heading, subheading, description, children}) => {
  return (
    <Flex variant='container.column' sx={{justifyContent: 'center'}}>
      <Box sx={{py: ['16px'], px: ['16px'], maxWidth: '640px', m: '0 auto'}}>
        {eyebrow && (
          <Eyebrow>{eyebrow}</Eyebrow>
        )}
        {heading && (
          <Text variant='cardtitle' sx={{mb: '32px'}}>{heading}</Text>
        )}
        { subheading && <Text variant='heading'>{subheading}</Text>
        }
        {description && (
          <Text variant='bigBody'>
            {description}
          </Text>
        )}
        {children}
      </Box>
    </Flex>
  )
}

export default CtaTextBlock
