
/** @jsx jsx */
import PortableText from '../atoms/portableText'

import {jsx, Flex, Box, Text} from 'theme-ui'

const IntroTextBlock = ({eyebrow, heading, subheading, description, children}) => {
  return (
    <Flex variant='container.column' sx={{justifyContent: 'center', flex: [1, 2, 3]}}>
      <Box
        sx={{
          maxWidth: '560px',
          m: '0 auto'
        }}
      >
        {eyebrow && (
          <Text variant='eyebrow'>{eyebrow}</Text>
        )}
        {heading && (
          <Text sx={{fontFamily: 'heading', fontWeight: 'bold', lineHeight: 'heading', my: '32px', fontSize: ['32px', '40px', '36px']}}>
            {heading}
          </Text>

        )}
        {description && (
          <Box sx={{maxWidth: '560px'}}>
            <PortableText blocks={description} />
          </Box>
        )}
        {children}
      </Box>
    </Flex>
  )
}

export default IntroTextBlock
