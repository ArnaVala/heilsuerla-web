/** @jsx jsx */
import {jsx, Box, Grid, Flex} from 'theme-ui'
import Img from 'gatsby-image'
import TextLink from '../../atoms/TextLink'
import TextBlock from '../../atoms/textBlock'
import '../../../styles/global.css'
import {buildImageObj} from '../../../lib/helpers'
import {imageUrlFor} from '../../../lib/image-url'

const ServiceFeature = ({block, raw}) => {
  const {ctaLink, image, eyebrow, heading, blockImageDirectionLeft
  } = block

  return (
    <Box as='section' variant='container.section' sx={{m: '0 auto', p: '0', py: '64px'}}>
      <Grid columns={[1, null, 2, 2]} sx={{width: '100%'}}>
        {blockImageDirectionLeft ? (
          <TextBlock eyebrow={eyebrow} heading={heading} description={raw.description}>
            <Box sx={{mt: '32px', width: '100%'}}>
              <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                {ctaLink.linkText}
              </TextLink>
            </Box>
          </TextBlock>
        ) : (
          <Box sx={{order: '0', maxWidth: '400px', overflow: 'hidden', margin: '0 auto', px: '32px'}}>
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
        )}

        {
          blockImageDirectionLeft ? (
            <Box sx={{
              bg: '#f3f3f3',
              order: '1',
              width: '100%',
              overflow: 'hidden',
              margin: '0 auto',
              p: '64px'}}>
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
                    maxWidth: '320px',
                    m: '32px',
                    objectFit: 'contain'
                  }}
                />
              )}
            </Box>

          ) : (
            <TextBlock sx={{}} eyebrow={eyebrow} heading={heading} description={raw.description}>
              <Box sx={{mt: '32px'}}>
                <TextLink toLink={ctaLink.url} data-text={ctaLink.linkText}>
                  {ctaLink.linkText}
                </TextLink>
              </Box>
            </TextBlock>
          )
        }

      </Grid>
    </Box>
  )
}

export default ServiceFeature
