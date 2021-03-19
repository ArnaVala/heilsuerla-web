/** @jsx jsx */

import React, {useContext} from 'react'
import {jsx, Box, Context, Flex, Grid} from 'theme-ui'
import TextLink from '../../atoms/TextLink'
import TextBlock from '../../atoms/textBlock'
import {buildImageObj} from '../../../lib/helpers'
import {imageUrlFor} from '../../../lib/image-url'

const SectionFeatureOne = ({block, raw}) => {
  const {ctaLink, image, eyebrow, heading, blockImageDirectionLeft
  } = block
  const {theme} = useContext(Context)
  const defaultColumnSizes = ['50% 50%', '50% 50%']
  const imageOrder = blockImageDirectionLeft === 'left' ? 0 : 1
  const columnValues = theme.container.grid.spans
    ? theme.container.grid.spans
    : defaultColumnSizes[imageOrder]

  const columns = image ? columnValues : '0'
  return (
    <Flex variant='container.wide'>
      <Grid gap={0} columns={[1, columns]}>
        <Box sx={{bg: 'muted', maxWidth: '320px', overflow: 'hidden', margin: '0 auto', px: '32px'}}>
          {image && image.asset && (
            <img
              src={imageUrlFor(buildImageObj(image))
                .auto('format')
                .fit('crop')
                .crop('center')
                .quality('100')
                .url()}
              alt={image.alt}
              css={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          )}
        </Box>
        <Box>
          <TextBlock eyebrow={eyebrow} heading={heading} description={raw.description}>
            <Box sx={{mt: '32px', width: '100%'}}>
              <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                {ctaLink.linkText}
              </TextLink>
            </Box>
          </TextBlock>
        </Box>
      </Grid>
    </Flex>
  )
}

export default SectionFeatureOne
