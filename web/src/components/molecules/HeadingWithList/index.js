import React from 'react'
import {Link as GatsbyLink} from 'gatsby-link'
import {Box, Grid, Flex, Link} from 'theme-ui'
import ThisList from '../../atoms/thisList'

const HeadingWithList = ({block}) => {
  const {heading, listBlockList = []} = block

  return (
    <Box as='section' bg='muted' variant='container.section'>
      <Box variant='container.innerWrapper'>
        <Box mb={4} sx={{width: '100%'}}>
          {heading && <Box as='h4' variant='text.subtitle' sx={{textAlign: 'center'}}>{heading}</Box>}
        </Box>
        <Box>
          <ThisList listBlockItem={listBlockList} />
        </Box>

        <a as={GatsbyLink} href='/heilsumarkthjalfun'>Nánar um heilsumarkþjálfun</a>
      </Box>
    </Box>
  )
}

export default HeadingWithList
