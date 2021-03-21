/** @jsx jsx */
import {jsx, Box, Flex, Grid, Text} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'
import {FiArrowRightCircle} from 'react-icons/fi'

import {Section, Wrapper} from '../common'

const AlterImageListIconBlock = ({block}) => {
  const {blockImageDirectionLeft, list, image} = block

  return (
    <Section>
      <Wrapper variant='container.wide'>
        <Flex sx={{flexDirection: ['column-reverse', null, 'row'], width: '100%'}}>
          {blockImageDirectionLeft ? (
            <Flex variant='container.column' sx={{justifyContent: 'center'}}>
              <Box
                sx={{py: ['32px', '48px', '64px'], px: ['16px', '32px', null], maxWidth: '640px', m: '0 auto'}}
              >
                {list.listWithIcon.map((item) => {
                  return (
                    <Grid columns={'24px 1fr'} key={item._key} sx={{my: '16px'}}>
                      <Flex sx={{justifyContent: 'center', mr: '-24px'}}>
                        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                      </Flex>
                      <Text variant='body' sx={{}}>
                        {item}
                      </Text>
                    </Grid>
                  )
                })}
              </Box>
            </Flex>

          ) : (
            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{maxWidth: ['360px', null, '520px']}}>
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
            <Flex variant='container.column' sx={{justifyContent: 'center', alignItems: 'center'}}>
              <Box sx={{maxWidth: ['360px', null, '520px']}}>
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
            <Flex variant='container.column' sx={{justifyContent: 'center'}}>
              <Box
                sx={{py: ['32px', '48px', '64px'], px: ['16px', '32px', null], maxWidth: '640px', m: '0 auto'}}
              >
                {list.listWithIcon.map((item) => {
                  return (
                    <Grid columns={'24px 1fr'} key={item._key} sx={{my: '16px'}}>
                      <Flex sx={{justifyContent: 'center', mr: '-24px'}}>
                        <FiArrowRightCircle color='#ff7476' fontSize='24px' />
                      </Flex>
                      <Text variant='body' sx={{}}>
                        {item}
                      </Text>
                    </Grid>
                  )
                })}
              </Box>
            </Flex>

          )}
        </Flex>
      </Wrapper>
    </Section>
  )
}
export default AlterImageListIconBlock
