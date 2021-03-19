/** @jsx jsx */
import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import {jsx, Box, Flex, Text} from 'theme-ui'

import {Section, Wrapper} from '../common'

const QuoteBanner = ({block}) => {
  const {quote, quoted, backgroundImage} = block

  return (
    <Box as='section'>
      <Wrapper>

        <Flex
          variant='container.full'
          alt={backgroundImage.alt}
          sx={{
            backgroundImage: `url(${imageUrlFor(buildImageObj(backgroundImage))
              .maxWidth(1920)
              .auto('format')
              .url()}
            )`
          }}
        >

          <Flex bg='white' variant='container.quoteBanner'>
            <Text as='p' variant='quote'>{quote}</Text>
            <Text as='h5' variant='eyebrow' sx={{color: 'primary'}}>{quoted}</Text>
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default QuoteBanner
