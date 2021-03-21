/** @jsx jsx */
import {jsx, Box, Flex, Grid} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import CtaTextBlock from '../atoms/ctaTextBlock'

import TextLink from '../atoms/TextLink'

const AlterImageText = ({blockImageDirectionLeft, eyebrow, heading, subheading, image, url, linkText, dataText, description}) => {
  return (
    <Wrapper variant='container.wide'>
      <Grid columns={[1, 1, 2, null]} sx={{width: '100%'}}>
        {blockImageDirectionLeft ? (
          <Flex sx={{gridRowStart: [2, 2, 1, 1]}}>
            <CtaTextBlock eyebrow={eyebrow} heading={heading} subheading={subheading} description={description}>
              {url && linkText && dataText && (
                <Box sx={{py: '16px'}}>
                  <TextLink toLink={url} data-text={dataText}>
                    {linkText}
                  </TextLink>
                </Box>
              )
              }
            </CtaTextBlock>
          </Flex>
        ) : (
          <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center', py: '32px'}}>
            <Box sx={{height: ['240px', '320px', '100%'], maxHeight: '480px', maxWidth: ['240px', '320px', '480px']}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              )}
            </Box>
          </Flex>
        )}

        {blockImageDirectionLeft ? (
          <Flex variant='container.column' sx={{
            justifyContent: 'center',
            alignItems: 'center',
            py: '32px'}}>
            <Box sx={{height: ['240px', '320px', '100%'], maxHeight: '320px', maxWidth: ['240px', '360px', '480px']}}>
              {image && image.asset && (
                <Image
                  {...image}
                  alt={image.alt}
                  css={{width: '100%', height: '100%', objectFit: 'contain'}}
                />
              )}
            </Box>
          </Flex>
        ) : (
          <CtaTextBlock subheading={subheading} eyebrow={eyebrow} heading={heading} description={description}>
            {url && linkText && dataText && (
              <Box sx={{py: '16px'}}>
                <TextLink toLink={url} data-text={dataText}>
                  {linkText}
                </TextLink>
              </Box>
            )}
          </CtaTextBlock>
        )
        }

      </Grid>
    </Wrapper>
  )
}
export default AlterImageText
