import React from 'react'
import {jsx, Grid, Flex, Box} from 'theme-ui'
import {Title, Desc} from '../../common'

const ListWithTitle = ({items = []}) => {
  return (
    <Grid as='ul' variant='container.gridContainer' sx={{listStyleType: 'none'}}>
      {content.items.map((item, i) => {
        const {title, text} = item
        return (
          <Flex bg='white' as='li' sx={{p: '32px'}} key={i}>
            <Title>{title}</Title>
            <Desc>
              {text}
            </Desc>
          </Flex>
        )
      })}
    </Grid>
  )
}

export default ListWithTitle
