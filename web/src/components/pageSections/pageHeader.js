
/** @jsx jsx */
import {imageUrlFor} from '../../lib/image-url'

import {jsx, Box, Flex, Text} from 'theme-ui'
import PortableText from '../atoms/portableText'
import {Wrapper} from '../common'

import {DownArrow, ArrowLong} from '../svg/index'

// textheader in studio
const PageHeader = ({block, raw}) => {
  const {eyebrow, heading, backgroundImage, color
  } = block
  return (
    <Wrapper as='section' variant='container.full'
    >
      <Flex
        {... backgroundImage}
        alt={backgroundImage.alt}
        sx={{
          pt: '96px',
          px: ['16px', '32px', '64px'],
          backgroundImage: `url(${imageUrlFor(backgroundImage)
            .maxWidth(1920)
            .width(1600)
            .height(1200)
            .auto('format')
            .url()}
            )`
        }}
      >
        <Flex variant='container.wide' bg='muted' >
          <Box variant='container.column'
            sx={{width: '100%', py: ['32px', '48px', '64px'], px: ['16px', '64px', null], maxWidth: '840px'}}
          >

            {eyebrow && <Text variant='title' sx={{overflowWrap: 'break-word', hyphens: ' auto', wordBreak: 'break-word'
            }}>{eyebrow}</Text>}

            {raw.description && (
              <Box>
                <PortableText blocks={raw.description} />
              </Box>

            )}
            <Box sx={{pt: '16px', overflow: 'hidden'}}>
              <DownArrow color={'#fe7576'} />
            </Box>
          </Box>

        </Flex>

      </Flex>

    </Wrapper>
  )
}
export default PageHeader
