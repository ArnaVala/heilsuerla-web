import React from 'react'
import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import {Styled, Box, Flex, Grid} from 'theme-ui'

function AuthorList ({items}) {
  return (
    <Box as='section' bg='muted' variant='container.section'>
      <Flex>
        {items.map(({author, _key}) => {
          const authorName = author && author.name
          return (
            <Box key={_key}>
              <div>
                {author && author.image && author.image.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(author.image))
                      .width(600)
                      .height(600)
                      .fit('crop')
                      .url()}
                    alt=''
                  />
                )}
              </div>

              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}

export default AuthorList
