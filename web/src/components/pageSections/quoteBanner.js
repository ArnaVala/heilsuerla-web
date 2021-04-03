
/** @jsx jsx */

import {jsx, Box, Flex, Container, Text} from 'theme-ui'

import {Section, Wrapper, Quote} from '../common'
import {BackgroundImage} from '../molecules'

const QuoteBanner = ({block}) => {
  const {quote, quoted} = block

  return (
    <Section variant='container.full'>
      <Wrapper>
        <Flex
          bg='primary'
          color='primaryBg'
          sx={{
            width: '100%',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            px: ['20px', '32px', '64px', null],
            pt: ['96px'],
            pb: ['32px']
          }}
        >
          <Quote children={quote} />
          { quoted && (
            <Text as='h3' variant='eyebrow'>{quoted}</Text>
          )}
        </Flex>
      </Wrapper>
    </Section>
  )
}

export default QuoteBanner
