
/** @jsx jsx */
import PortableText from '../atoms/portableText'

import {jsx, Flex, Box, Text} from 'theme-ui'

const IntroTextBlock = ({eyebrow, heading, subheading, description, children}) => {
  return (
    <Flex variant='container.column' sx={{justifyContent: 'center'}}>
      <Box sx={{py: ['32px', '48px', '64px'], px: ['16px', '32px', null], maxWidth: '720px', m: '0 auto'}}>
        {eyebrow && (
          <Text variant='eyebrow'>{eyebrow}</Text>
        )}
        {heading && (
          <Text variant='title'>{heading}</Text>
        )}
        { subheading && <Text variant='subtitle'>{subheading}</Text>
        }
        {description && (
          <Box>
            <PortableText blocks={description} />
          </Box>
        )}
        {children}
      </Box>
    </Flex>
  )
}

export default IntroTextBlock
