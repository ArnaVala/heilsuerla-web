
/** @jsx jsx */
import PortableText from '../atoms/portableText'
import {jsx, Flex, Box, Text} from 'theme-ui'
import {Eyebrow} from '../common'

const IntroTextBlock = ({eyebrow, heading, subheading, description, children}) => {
  return (
    <Flex variant='container.column' sx={{justifyContent: 'center', flex: [1, 4, 4, 1]}}>
      <Box
        sx={{
          maxWidth: '640px',
          m: '0 auto'
        }}
      >
        {eyebrow && (
          <Eyebrow children={eyebrow} />
        )}
        {heading && (
          <Text variant='subtitle' sx={{mb: '16px'}}>
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
