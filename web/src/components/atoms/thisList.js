import React from 'react'
import {jsx, Grid, Flex, Box} from 'theme-ui'

const ThisList = ({listBlockItem = []}) => {
  return (
    <Grid as='ul' variant='container.gridContainer' sx={{listStyleType: 'none'}}>
      {listBlockItem.map((listItem) => {
        const {listBlockText} = listItem
        return (
          <Flex bg='white' as='li' sx={{p: '32px'}} key={listItem._key}>
            <Box as='p' variant='text.listItem' sx={{fontSize: '18px'}}>{listBlockText}</Box>
          </Flex>
        )
      })}
    </Grid>
  )
}

export default ThisList
