
/** @jsx jsx */
import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import {jsx, Box, Flex, Container, Text} from 'theme-ui'

import {Section, Wrapper} from '../common'

const QuoteBanner = ({block}) => {
  const {quote, quoted, backgroundImage} = block

  return (
    <Box as='section'>
      <Wrapper>
        <Flex
          {...backgroundImage}
          variant='container.full'
          alt={backgroundImage.alt}
          sx={{
            backgroundImage: `url(${imageUrlFor(backgroundImage).width(1920).height(1600).auto('format').url()}
            )`

          }}
        >
          <Flex bg='primary' color='primaryBg' variant='container.quoteBanner' sx={{my: '32px'}}>
            <Text as='p' variant='quote' sx={{lineHeight: 'body', fontSize: '32px', fontWeight: '300'}}>{quote}</Text>
            { quoted && (
              <Text as='h5' variant='eyebrow'>{quoted}</Text>
            )}
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default QuoteBanner
